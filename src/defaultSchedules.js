const { schedule } = require('./database');

const schedules = {
	Regular: [
		{
			name: 'Period 1',
			start: '8:00 AM',
			end: '8:41 AM'
		},
		{
			name: 'Period 2',
			start: '8:45 AM',
			end: '9:26 AM'
		},
		{
			name: 'Period 3',
			start: '9:31 AM',
			end: '10:15 AM'
		},
		{
			name: 'Period 4',
			start: '10:20 AM',
			end: '11:01 AM'
		},
		{
			name: 'Period 5',
			start: '11:06 AM',
			end: '11:47 AM'
		},
		{
			name: 'Period 6',
			start: '11:52 AM',
			end: '12:33 PM'
		},
		{
			name: 'Period 7',
			start: '12:38 PM',
			end: '1:19 PM'
		},
		{
			name: 'Period 8',
			start: '1:24 PM',
			end: '2:05 PM'
		},
		{
			name: 'Period 9',
			start: '2:09 PM',
			end: '2:50 PM'
		},
		{
			name: 'Period 10',
			start: '2:54 PM',
			end: '3:35 PM'
		}
	],
	Homeroom: [
		{
			name: 'Period 1',
			start: ' 8:00 AM',
			end: '8:40 AM'
		},
		{
			name: 'Period 2',
			start: ' 8:45 AM',
			end: '9:25 AM'
		},
		{
			name: 'Period 3',
			start: ' 9:29 AM',
			end: '10:09 AM'
		},
		{
			name: 'Homeroom',
			start: ' 10:13 AM',
			end: '10:25 AM'
		},
		{
			name: 'Period 4',
			start: ' 10:30 AM',
			end: '11:10 AM'
		},
		{
			name: 'Period 5',
			start: ' 11:14 AM',
			end: '11:54 AM'
		},
		{
			name: 'Period 6',
			start: ' 11:58 AM',
			end: '12:38 PM'
		},
		{
			name: 'Period 7',
			start: ' 12:42 PM',
			end: '1:22 PM'
		},
		{
			name: 'Period 8',
			start: ' 1:26 PM',
			end: '2:06 PM'
		},
		{
			name: 'Period 9',
			start: ' 2:10 PM',
			end: '2:50 PM'
		},
		{
			name: 'Period 10',
			start: ' 2:55 PM',
			end: '3:35 PM'
		}
	],
	Conference: [
		{
			name: 'Period 1',
			start: ' 8:00 AM',
			end: '8:37 AM'
		},
		{
			name: 'Period 2',
			start: ' 8:41 AM',
			end: '9:18 AM'
		},
		{
			name: 'Period 3',
			start: ' 9:22 AM',
			end: '9:59 AM'
		},
		{
			name: 'Period 4',
			start: ' 10:03 AM',
			end: '10:40 AM'
		},
		{
			name: 'Period 5',
			start: ' 10:44 AM',
			end: '11:21 AM'
		},
		{
			name: 'Period 6',
			start: ' 11:25 AM',
			end: '12:02 PM'
		},
		{
			name: 'Period 7',
			start: ' 12:06 PM',
			end: '12:43 PM'
		},
		{
			name: 'Period 8',
			start: ' 12:47 PM',
			end: '1:24 PM'
		},
		{
			name: 'Period 9',
			start: ' 1:28 PM',
			end: '2:05 PM'
		},
		{
			name: 'Period 10',
			start: ' 2:09 PM',
			end: '2:46 PM'
		},
		{
			name: 'Meeting',
			start: ' 2:50 PM',
			end: '3:30 PM'
		}
	]
};

Object.entries(schedules).forEach(async scheduleObj => {
	const existingSchedule = await schedule.findOne({
		where: { name: scheduleObj[0] }
	});
	if (!existingSchedule)
		await schedule.create({
			name: scheduleObj[0],
			schedule: JSON.stringify(scheduleObj[1])
		});
});
