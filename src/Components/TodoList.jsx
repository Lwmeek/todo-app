import React, { useState } from "react";
import { Checkbox } from "@nextui-org/react";

const TodoList = () => {
	const [active, setActive] = useState(0);
	const handleActive = (id) => {
		setActive(id);
	};
	return (
		<div className="flex gap-4">
			<Checkbox lineThrough radius="full" size="lg">
				Create a new todo...
			</Checkbox>
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
