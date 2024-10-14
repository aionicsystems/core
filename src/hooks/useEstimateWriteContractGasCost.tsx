import { useEffect, useState } from 'react';
import { useAccount, usePublicClient } from 'wagmi';
import { Address } from 'viem';

interface UseEstimatedWriteContractGasCostParams {
  abi: any; // Use viem's Abi type instead of 'any'
  functionName: string;
  address: Address; // The contract address
  args: unknown[]; // Replace 'any[]' with 'unknown[]' for type safety
}

export function useEstimatedWriteContractGasCost({
  abi,
  functionName,
  address,
  args,
}: UseEstimatedWriteContractGasCostParams) {
  const [estimatedGasCost, setEstimatedGasCost] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Step 1: Get the connected account from wagmi
  const { address: userAddress } = useAccount();

  // Step 2: Get the public client (provider) from viem
  const publicClient = usePublicClient();

  useEffect(() => {
    async function estimateGas() {
      // Early return if necessary inputs are missing
      if (!address || !functionName || !abi || !args || !userAddress || !publicClient) return;

      try {
        setIsLoading(true);
        setError(null); // Clear previous errors if any

         // Step 5: Estimate gas using viem's publicClient.estimateGas
         const estimatedGas = await publicClient.estimateContractGas({
          address: address, 
          abi: abi,
          functionName: 'collect',
          account: userAddress as Address,
          args: args
        })

        const gasPrice = await publicClient.getGasPrice() 

        setEstimatedGasCost((gasPrice * estimatedGas).toString()); // Convert gas estimate to string
      } catch (err) {
        console.error("Error estimating gas:", err); // Log the error for debugging
        if (err instanceof Error) {
          setError(err.message); // Capture error message
        } else {
          setError('An unknown error occurred'); // Handle unexpected errors
        }
      } finally {
        setIsLoading(false); // Always stop loading
      }
    }

    estimateGas();
  }, [address, functionName, abi, args, userAddress, publicClient]);

  return { estimatedGasCost, isLoading, error };
}
