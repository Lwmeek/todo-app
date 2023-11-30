import React from "react";
import { Checkbox, Tabs, Tab } from "@nextui-org/react";

const TodoList = () => {
	return (
		<div className="flex gap-4">
			<Checkbox lineThrough radius="full" size="lg">
				Create a new todo...
			</Checkbox>
			<div className="flex w-full flex-col">
				<Tabs
					aria-label="Options"
					color="primary"
					classNames={{
						tabList:
							"gap-6 w-full relative rounded-none p-0 border-b border-divider",
						cursor: "w-full bg-[#22d3ee]",
						tab: "max-w-fit px-0 h-12",
						tabContent: "group-data-[selected=true]:text-[var(--clr-Bright-Blue)]",
					}}
				>
					<Tab
						key="all"
						title={
							<div className="flex items-center space-x-2">
								<span className="font-bold">All</span>
							</div>
						}
					/>
					<Tab
						key="active"
						title={
							<div className="flex items-center space-x-2">
								<span className="font-bold">Active</span>
							</div>
						}
					/>
					<Tab
						key="completed"
						title={
							<div className="flex items-center space-x-2">
								<span className="font-bold">Completed</span>
							</div>
						}
					/>
				</Tabs>
			</div>
		</div>
	);
};

export default TodoList;
