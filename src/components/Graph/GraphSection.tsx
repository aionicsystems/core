import { FC, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { aggregatorEntity, client } from "../../repository/requests";
import { useGlobalState } from "../../hooks/useGlobalState";
import { REQUEST_AGGREGATOR_ENTITY } from "../../repository/requestKeys";
import { useQuery } from "@tanstack/react-query";
import { AggregatorType } from "../../types/AggregatorTypes";

// Register required components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const GraphSection: FC = () => {
    const { state } = useGlobalState();
    const [chartKey, setChartKey] = useState(0); // Key to force chart re-render

    const { data, isLoading, isError } = useQuery({
        queryFn: async () => {
            const result = await client.query({
                query: aggregatorEntity,
                variables: { id: state.Loan?.asset.aggregator.id },
            });
            return result.data;
        },
        queryKey: [`${REQUEST_AGGREGATOR_ENTITY}_${state.Loan?.asset.aggregator.id}`],
    });

    // Update chart key whenever new data is received
    useEffect(() => {
        if (data) {
            setChartKey((prevKey) => prevKey + 1);
        }
    }, [data]);

    const aggregatorData: AggregatorType = data?.aggregatorEntity ?? {};
    const prices = aggregatorData.prices ?? [];

    // Prepare chart data if prices data is available
    const chartData = prices.length > 0 ? {
        labels: prices.map((item) =>
            new Date(item.blockTimestamp * 1000).toLocaleTimeString()
        ),
        datasets: [
            {
                label: "Price",
                data: prices.map((item) => item.price),
                fill: false,
                borderColor: "#42A5F5",
            },
        ],
    } : null;

    // Conditional content based on loading and error states
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error :(</p>;

    return (
        chartData ? <Line key={chartKey} data={chartData} /> : <p>No data available</p>
    );
};