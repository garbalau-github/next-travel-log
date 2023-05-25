import { z } from 'zod';

const errors = {
    title: 'Title cannot be empty!',
    description: 'Description cannot be empty!',
    image: 'Image must be a valid URL',
};

//  Validator
export const TravelLog = z.object({
    title: z.string().trim().min(1, errors.title),
    description: z.string().min(1, errors.description),
    image: z.string().url(errors.image),
    rating: z.coerce.number().min(0).max(10),
    latitude: z.coerce.number().min(-90).max(90),
    longitude: z.coerce.number().min(-180).max(180),
});

export const TravelLogKeys = TravelLog.keyof().Enum;

export type TravelLogKeyType = keyof typeof TravelLogKeys;

export type TravelLogKeyTypeWithoutLocation = Exclude<
    TravelLogKeyType,
    'latitude' | 'longitude'
>;

export type TravelLog = z.infer<typeof TravelLog>;
