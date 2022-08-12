export const Employees = () => {
	enum Status {
		working,
		hired,
		retired
	}

	interface IEmployee {
		firstName: string;
		lastName: string;
		age: number;
		isInsured: boolean;
		projects: string[];
		status: Status;
	}

	const employees: IEmployee[] = [
		{
			firstName: 'John',
			lastName: 'Taylor',
			age: 34,
			isInsured: true,
			projects: ['sales', 'direction'],
			status: Status.hired
		},
		{
			firstName: 'Alice',
			lastName: 'Wonderton',
			age: 24,
			isInsured: true,
			projects: ['runnerClub', 'management', 'direction'],
			status: Status.hired
		},
		{
			firstName: 'Thorsten',
			lastName: 'Angleton',
			age: 45,
			isInsured: false,
			projects: ['walkingClub', 'runnerClub'],
			status: Status.working
		},
	];

	return (
		<>
			<h2>There are {employees.length} employees</h2>
			{employees.map((emp) => {
				return (
					<div className="employee">
						<div>{emp.firstName}</div>
						<div>{emp.lastName}</div>
						<div>length of firstName: {emp.firstName.length}</div>
						{emp.status === Status.working && <div>SEND PAY CHECK</div>}
					</div>
				);
			})}
		</>
	);
};