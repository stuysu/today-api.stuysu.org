import { ApolloError } from "apollo-server-express";

export default async (_, { id, date, name }, { models: { event } }) => {
  date = `${date.getUTCFullYear()}-${
    date.getUTCMonth() + 1
  }-${date.getUTCDate()}`;

  const editingEvent = await event.findOne({
    where: {
      id,
    },
  });

  if (!editingEvent) {
    throw new ApolloError("There's no event with that ID", "ID_NOT_FOUND");
  }

  if (date) editingEvent.date = date;
  if (name) editingEvent.name = name;
  return await editingEvent.save();
};
