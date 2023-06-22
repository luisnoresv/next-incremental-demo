export interface Dog {
	breeds: Breed[];
	id: string;
	url: string;
	width: number;
	height: number;
}

interface Breed {
	weight: Weight;
	height: Height;
	id: number;
	name: string;
	country_code: string;
	bred_for: string;
	breed_group: string;
	life_span: string;
	temperament: string;
	reference_image_id: string;
}

interface Weight {
	imperial: string;
	metric: string;
}

interface Height {
	imperial: string;
	metric: string;
}
