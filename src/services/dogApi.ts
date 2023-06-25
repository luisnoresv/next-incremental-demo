import { DOG_API_BASE_URL } from '@/lib/appConstants';
import { Dog } from '@/lib/models/Dogs';

export async function fetchDogs(order: string, limit: number): Promise<Dog[]> {
	try {
		const response = await fetch(
			`${DOG_API_BASE_URL}/v1/images/search?mime_types=jpg,png,gif&format=json&order=${order}&limit=${limit}&has_breeds=true`,
			{
				headers: {
					'x-api-key': process.env.DOG_API_KEY || '',
				},
				next: {
					revalidate: 300,
				},
			}
		);

		if (!response.ok) {
			throw new Error('Failed to fetch the information from the dogs');
		}

		return response.json();
	} catch (error: any) {
		throw new Error(error.message);
	}
}

export async function fetchDogById(id: string): Promise<Dog> {
	try {
		const response = await fetch(`${DOG_API_BASE_URL}/v1/images/${id}`, {
			headers: {
				'x-api-key': process.env.DOG_API_KEY || '',
			},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch the information from the dogs');
		}

		return response.json();
	} catch (error: any) {
		throw new Error(error.message);
	}
}
