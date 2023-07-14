"use client";

import { useEffect, useState } from "react";

import { currencyFormatter } from "@/lib/utils";

interface CurrencyProps {
	value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<div className="font-semibold">
			{currencyFormatter.format(Number(value))}
		</div>
	);
};

export default Currency;
