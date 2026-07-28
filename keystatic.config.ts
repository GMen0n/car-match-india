import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'GMen0n',
      name: 'car-match-india',
    },
  },
  collections: {
    cars: collection({
      label: 'Cars',
      slugField: 'model',
      path: 'src/content/cars/*',
      format: { data: 'yaml' },
      schema: {
        brand: fields.text({ label: 'Brand', validation: { isRequired: true } }),
        model: fields.slug({ name: { label: 'Model' } }),
        variant: fields.text({ label: 'Variant / Trim' }),
        year: fields.integer({ label: 'Model Year', defaultValue: 2026 }),
        bodyType: fields.select({
          label: 'Body Type',
          options: [
            { label: 'Hatchback', value: 'Hatchback' },
            { label: 'Sedan', value: 'Sedan' },
            { label: 'SUV', value: 'SUV' },
            { label: 'MUV', value: 'MUV' },
            { label: 'Coupe', value: 'Coupe' },
            { label: 'Convertible', value: 'Convertible' },
          ],
          defaultValue: 'SUV',
        }),
        fuelType: fields.select({
          label: 'Fuel Type',
          options: [
            { label: 'Petrol', value: 'Petrol' },
            { label: 'Diesel', value: 'Diesel' },
            { label: 'CNG', value: 'CNG' },
            { label: 'Electric', value: 'Electric' },
            { label: 'Hybrid', value: 'Hybrid' },
          ],
          defaultValue: 'Petrol',
        }),
        transmission: fields.select({
          label: 'Transmission',
          options: [
            { label: 'Manual', value: 'Manual' },
            { label: 'Automatic', value: 'Automatic' },
            { label: 'CVT', value: 'CVT' },
            { label: 'DCT', value: 'DCT' },
          ],
          defaultValue: 'Manual',
        }),
        seatingCapacity: fields.integer({ label: 'Seating Capacity', defaultValue: 5 }),
        engineCC: fields.text({ label: 'Engine Displacement (cc)' }),
        mileage: fields.text({ label: 'Mileage (kmpl or km/kWh)' }),
        priceExShowroom: fields.integer({ label: 'Ex-Showroom Price (INR)' }),
        priceOnRoad: fields.integer({ label: 'Approx On-Road Price (INR)' }),
        features: fields.array({
          label: 'Features',
          item: fields.text({ label: 'Feature' }),
        }),
        airbags: fields.integer({ label: 'Number of Airbags', defaultValue: 2 }),
        bncapRating: fields.select({
          label: 'Bharat NCAP Safety Rating',
          options: [
            { label: 'Not Tested', value: '0' },
            { label: '1 Star', value: '1' },
            { label: '2 Stars', value: '2' },
            { label: '3 Stars', value: '3' },
            { label: '4 Stars', value: '4' },
            { label: '5 Stars', value: '5' },
          ],
          defaultValue: '0',
        }),
        bncapAdultScore: fields.text({ label: 'BNCAP Adult Score (/32)' }),
        bncapChildScore: fields.text({ label: 'BNCAP Child Score (/49)' }),
        reliability: fields.integer({
          label: 'Reliability (1-10)',
          defaultValue: 5,
          validation: { min: 1, max: 10 },
        }),
        brandReputation: fields.integer({
          label: 'Brand Reputation (1-10)',
          defaultValue: 5,
          validation: { min: 1, max: 10 },
        }),
        sparePartsAvailability: fields.integer({
          label: 'Spare Parts Availability (1-10)',
          defaultValue: 5,
          validation: { min: 1, max: 10 },
        }),
      },
    }),
    brands: collection({
      label: 'Brands',
      slugField: 'name',
      path: 'src/content/brands/*',
      format: { data: 'yaml' },
      schema: {
        name: fields.slug({ name: { label: 'Brand Name' } }),
        country: fields.text({ label: 'Country of Origin' }),
        established: fields.integer({ label: 'Year Established' }),
        website: fields.text({ label: 'Website' }),
        description: fields.text({ label: 'Description', multiline: true }),
        reputationScore: fields.integer({
          label: 'Overall Reputation (1-10)',
          defaultValue: 5,
          validation: { min: 1, max: 10 },
        }),
        serviceNetworkScore: fields.integer({
          label: 'Service Network Coverage (1-10)',
          defaultValue: 5,
          validation: { min: 1, max: 10 },
        }),
      },
    }),
  },
});
