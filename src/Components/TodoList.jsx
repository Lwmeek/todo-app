import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";

const TodoList = () => {
	const [active, setActive] = useState(0);
	const handleActive = (id) => {
		setActive(id);
	};
	return (
		<div className="flex gap-4">
			<CheckboxGroup
				className="tasks ml-3 rounded-lg shadow-[1px_15px_20px_var(--clr-Light-Grayish-Blue-1)]"
				label="Create a new todo..."
			>
				<div className="flex justify-between items-center tasks-item">
					<Checkbox lineThrough radius="full" size="lg">
						<p className="ml-2">Complete Javascript course</p>
					</Checkbox>
					<img src="./src/images/icon-cross.svg" alt="" />
				</div>
				<div className="flex justify-between items-center tasks-item">
					<Checkbox value="2" lineThrough radius="full" size="lg">
						Jog around the park 3x
					</Checkbox>
					<img src="./src/images/icon-cross.svg" alt="" />
				</div>
				<div className="flex justify-between items-center tasks-item">
					<Checkbox value="3" lineThrough radius="full" size="lg">
						10 minutes meditation
					</Checkbox>
					<img src="./src/images/icon-cross.svg" alt="" />
				</div>
				<div className="flex justify-between items-center tasks-item">
					<Checkbox value="4" lineThrough radius="full" size="lg">
						Read for 1 hour
					</Checkbox>
					<img src="./src/images/icon-cross.svg" alt="" />
				</div>
				<div className="flex justify-between items-center tasks-item">
					<Checkbox value="5" lineThrough radius="full" size="lg">
						Complete Todo App on Frontend Mentor
					</Checkbox>
					<img src="./src/images/icon-cross.svg" alt="" />
				</div>
				<div className="flex justify-between">
					<p>5 items left</p>
					<button>Clear Completed</button>
				</div>
			</CheckboxGroup>
			<div className="flex flex-col">
				<Checkbox lineThrough radius="full" size="lg">
					Create a new todo...
				</Checkbox>
			</div>
			<div className="tabs">
				<ul>
					<li
						className={`tabs-item ${active === 1 ? "active" : ""}`}
						onClick={() => handleActive(1)}
					>
						All
					</li>
					<li
						className={`tabs-item ${active === 2 ? "active" : ""}`}
						onClick={() => handleActive(2)}
					>
						Active
					</li>
					<li
						className={`tabs-item ${active === 3 ? "active" : ""}`}
						onClick={() => handleActive(3)}
					>
						Completed
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TodoList;
