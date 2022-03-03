// stolen from frontend. To be used in todayJson.js. If you update this here, please also update it on the frontend
export default function periodData(scheduleObj) {
	// sort periods by start time, just in case
	// this might be unnecessary
	const schedule = JSON.parse(scheduleObj.schedule);
	schedule
		.map(period => {
			period.startDate = new Date();
			let startHours = Number(period.start.split(":")[0]);
			if (startHours === 12) startHours = 0;
			if (period.start.includes("PM")) startHours += 12;
			period.startDate.setHours(startHours);
			period.startDate.setMinutes(Number(period.start.split(" ")[0].split(":")[1]));
			period.endDate = new Date();
			let endHours = Number(period.end.split(":")[0]);
			if (endHours === 12) endHours = 0;
			if (period.end.includes("PM")) endHours += 12;
			period.endDate.setHours(endHours);
			period.endDate.setMinutes(Number(period.end.split(" ")[0].split(":")[1]));
			return period;
		})
		.sort((a, b) => (a > b ? 1 : -1));

	// get period
	const now = new Date();
	for (let i = 0; i < schedule.length; i++) {
		if (now >= schedule[i].startDate && now <= schedule[i].endDate)
			return {
				name: schedule[i].name,
				start: schedule[i].start,
				end: schedule[i].end,
				into: Math.floor((now - schedule[i].startDate) / (60 * 1000)),
				left: Math.floor((schedule[i].endDate - now) / (60 * 1000))
			};

		if (now >= schedule[i].endDate) {
			if (i === schedule.length - 1)
				return {
					name: "After school",
					start: schedule[i].end,
					end: "12:00 AM",
					into: Math.floor((now - schedule[i].endDate) / (60 * 1000)),
					left: "Not enough"
				};

			if (now <= schedule[i + 1].startDate)
				return {
					name: "Before " + schedule[i + 1].name,
					start: schedule[i].end,
					end: schedule[i + 1].start,
					into: Math.floor((now - schedule[i].endDate) / (60 * 1000)),
					left: Math.floor((schedule[i + 1].startDate - now) / (60 * 1000))
				};
		}
	}

	return {
		name: "Before school",
		start: "12:00 AM",
		end: schedule[0].start,
		into: "Not enough",
		left: Math.floor((schedule[0].startDate - now) / (60 * 1000))
	};
}
