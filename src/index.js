import express from 'express';
import cors from 'cors';

import expressSession from "express-session";
import SequelizeConnectSessionConstructor from "connect-session-sequelize";
import {SESSION_SECRET} from "./constants";

import {NODE_ENV} from './constants';

import apolloServer from './graphql';

import todayJson from './todayJson';

const app = express();

/* hacky solution for cors
 * so our api users can access our api
 */
const baseAllowedOrigins = /^https?:\/\/(?:localhost|today(?:-api)?\.stuysu\.org)|todaystuysu\.netlify\.(?:com|app)$/;
const allowedOrigins = ["https://junior-stuysu-org.vercel.app/"];

app.use(cors({
    origin: (origin, callback) => {
        // if node env is development, then allow all origins
        if (NODE_ENV === "development") {
            return callback(null, true);
        }
        // if request has no origin (like mobile apps or curl requests), then fail
        if (!origin) return callback(new Error("No origin specified"), false);
        // check against allowed origins
        if (allowedOrigins.includes(origin) || baseAllowedOrigins.test(origin)) {
            return callback(null, true);
        }
        // if origin is not allowed, then fail
        return callback(new Error("Not allowed by CORS"), false);
    }, credentials: true
}));

const SequelizeConnectSession = SequelizeConnectSessionConstructor(expressSession.Store)
const db = require("./database").sequelize
const sequelizeStore = new SequelizeConnectSession({db});
sequelizeStore.sync()
// no idea what some of these do, copied from when stuyactivities used sessions
// instead of JWTs. https://github.com/stuysu/api.stuyactivities.org/blob/1ff39ef0d229e6295bcb190e9cba279d72a812fb/src/middleware/session.js
const session = expressSession({
    secret: SESSION_SECRET, name: "session", resave: true, saveUninitialized: false, store: sequelizeStore, cookie: {
        path: "/", httpOnly: true, maxAge: 7 * 86400 * 1000, sameSite: "none", secure: NODE_ENV === "production"
    }, rolling: true
})
app.use(session);

apolloServer
    .start()
    .then(() => apolloServer.applyMiddleware({app, path: '/graphql', cors: false}));

app.get("/today.json", todayJson)

// dev env for now
// export default app;

app.enable("trust proxy")
app.listen(process.env.PORT || 3001, () => console.log(`Listening on port ${process.env.PORT || 3001}`));
