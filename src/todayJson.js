import periodData from "./utils/periodData"

const { day, schedule } = require('./database')
export default async function todayJson(req, res) {
	const dbDay = await day.findOne({
		where: {
			//date: `${date.getYear()}-${date.getMonth() + 1}-${date.getDate()}`
			date: new Date()
		}
	});

	if (!dbDay) res.json({
		date: new Date(),
		testing: "None",
		block: "N/A",
		schedule: [],
		scheduleName: "No Data for Today",
		period: {
			name: "No Data for Today",
			start: "12:00 AM",
			end: "11:59 PM",
			into: 0,
			left: 0
		}
	})

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
