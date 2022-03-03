import periodData from "./utils/periodData"

const { day, schedule } = require('./database')
export default async function todayJson(req, res) {
	const dbDay = await day.findOne({
		where: {
			//date: `${date.getYear()}-${date.getMonth() + 1}-${date.getDate()}`
			date: new Date()
		}
	});

	const dbSchedule = await schedule.findOne({ where: { id: dbDay.scheduleId }})

	const today = {
		date: dbDay.date,
		testing: dbDay.testing,
		block: dbDay.block,
		schedule: JSON.parse(dbSchedule.schedule),
		scheduleName: dbSchedule.name,
		period: periodData(dbSchedule)
	}

	res.json(today)
}
