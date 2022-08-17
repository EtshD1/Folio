import { useEffect, useRef, useState } from "react";

interface Props {}

const Item = (props: Props) => {
	const itemRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (itemRef.current) {
			setHeight(itemRef.current.offsetWidth);
			const updateSize = () => {
				const width = itemRef.current?.offsetWidth;
				if (width) setHeight(width);
			};
			window.addEventListener("resize", updateSize);

			return () => window.removeEventListener("resize", updateSize);
		}
	}, [itemRef, setHeight]);

	return (
		<div
			ref={itemRef}
			style={{
				height: height,
				backgroundColor: "#F66060",
				borderRadius: "1rem",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			Project 1
		</div>
	);
};

export default Item;
