interface Props {
	className?: string;
}

const ExternalArrow = ({ className }: Props) => {
	return (
		<svg
			width="14"
			height="15"
			viewBox="0 0 14 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className ? className : ""}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 0.5H13C13.5523 0.5 14 0.947715 14 1.5V10.5C14 11.0523 13.5523 11.5 13 11.5C12.4477 11.5 12 11.0523 12 10.5V3.91421L1.70711 14.2071C1.31658 14.5976 0.683417 14.5976 0.292893 14.2071C-0.0976311 13.8166 -0.0976311 13.1834 0.292893 12.7929L10.5858 2.5H4C3.44772 2.5 3 2.05228 3 1.5C3 0.947715 3.44772 0.5 4 0.5Z"
				fill="black"
			/>
		</svg>
	);
};

export default ExternalArrow;
