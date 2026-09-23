import { Vehicle } from "../types";
import { assets } from "./assets";

export const vehicles: Vehicle[] = [
  {
    id: "2016-mercedes-benz-sprinter-mwb",
    slug: "2016-mercedes-benz-sprinter-mwb",
    name: "2016 Mercedes-Benz Sprinter MWB - XPDX",
    make: "Mercedes-Benz",
    model: "Sprinter MWB High Roof",
    year: 2016,
    badge: "High roof · 0t · Automatic · Diesel",
    roofType: "High roof",
    transmission: "Automatic",
    fuel: "Diesel",
    priceWeekly: 400,
    priceMonthly: 1600,
    minimumDays: 28,
    image: assets.vehicles.vehicle3,
    gallery: [
      assets.vehicles.vehicle3,
      assets.vehicles.sprinterRear,
      assets.vehicles.sprinterInterior,
      assets.vehicles.vehicle2
    ],
    specs: {
      length: "5,910 mm",
      height: "2,705 mm",
      width: "1,993 mm",
      wheelbase: "3,665 mm",
      loadVolume: "10.5 m³",
      seats: 2
    },
    description: "Hire this 2016 Mercedes-Benz Sprinter MWB in Sydney for moving, trade equipment, events and bulky deliveries. Van configuration: MWB, High Roof. Minimum hire term is 28 days. Contact Hire Car Marketplace to confirm availability, inclusions and final vehicle configuration.",
    includedFeatures: [
      "Comprehensive insurance",
      "Unlimited kilometres",
      "24/7 roadside assistance",
      "Scheduled servicing and maintenance",
      "Ongoing team support",
      "GPS tracking",
      "Air Conditioning",
      "Automatic Transmission",
      "High Roof",
      "MWB Wheelbase"
    ],
    useCases: ["trade", "events", "moving", "courier"],
    inStock: true
  },
  {
    id: "2009-toyota-hiace-lwb",
    slug: "2009-toyota-hiace-lwb",
    name: "2009 Toyota Hiace LWB - XPDX",
    make: "Toyota",
    model: "HiAce LWB",
    year: 2009,
    badge: "Standard roof · 0t · Automatic",
    roofType: "Standard roof",
    transmission: "Automatic",
    fuel: "Petrol",
    priceWeekly: 300,
    priceMonthly: 1200,
    minimumDays: 28,
    image: assets.vehicles.vehicle1,
    gallery: [
      assets.vehicles.vehicle1,
      assets.vehicles.hiaceRear,
      assets.vehicles.vehicle4
    ],
    specs: {
      length: "4,695 mm",
      height: "1,980 mm",
      width: "1,695 mm",
      wheelbase: "2,570 mm",
      loadVolume: "6.0 m³",
      seats: 2
    },
    description: "Reliable and economical workhorse ideal for courier runs, local parcels, and inner-city deliveries with underground carpark clearance (under 2m).",
    includedFeatures: [
      "Comprehensive insurance",
      "Unlimited kilometres",
      "24/7 roadside assistance",
      "Scheduled servicing and maintenance",
      "Under 2.0m height clearance",
      "Reverse camera",
      "Air Conditioning",
      "Automatic Transmission"
    ],
    useCases: ["courier", "delivery", "trade"],
    inStock: true
  },
  {
    id: "2014-mercedes-benz-sprinter-mwb-std",
    slug: "2014-mercedes-benz-sprinter-mwb-std",
    name: "2014 Mercedes-Benz Sprinter MWB",
    make: "Mercedes-Benz",
    model: "Sprinter MWB",
    year: 2014,
    badge: "High roof · 0t · Automatic",
    roofType: "High roof",
    transmission: "Automatic",
    fuel: "Diesel",
    priceWeekly: 400,
    priceMonthly: 1600,
    minimumDays: 28,
    image: assets.vehicles.vehicle2,
    gallery: [
      assets.vehicles.vehicle2,
      assets.vehicles.sprinterRear,
      assets.vehicles.sprinterInterior
    ],
    specs: {
      length: "5,910 mm",
      height: "2,705 mm",
      width: "1,993 mm",
      wheelbase: "3,665 mm",
      loadVolume: "10.5 m³",
      seats: 2
    },
    description: "Exceptional cargo capacity for staging, event production, pallet delivery, and trade services with standing height inside the cargo bay.",
    includedFeatures: [
      "Comprehensive insurance",
      "Unlimited kilometres",
      "24/7 roadside assistance",
      "Scheduled servicing and maintenance",
      "High roof standing clearance",
      "Rear step bumper",
      "Air Conditioning",
      "Automatic Transmission"
    ],
    useCases: ["trade", "events", "moving"],
    inStock: true
  },
  {
    id: "2014-mercedes-benz-sprinter-mwb-35t",
    slug: "2014-mercedes-benz-sprinter-mwb-35t",
    name: "2014 Mercedes-Benz Sprinter MWB - XPDX",
    make: "Mercedes-Benz",
    model: "Sprinter MWB 3.5t",
    year: 2014,
    badge: "High roof · 3.5t · Automatic",
    roofType: "High roof",
    transmission: "Automatic",
    fuel: "Diesel",
    priceWeekly: 400,
    priceMonthly: 1600,
    minimumDays: 28,
    image: assets.vehicles.vehicle2,
    gallery: [
      assets.vehicles.vehicle2,
      assets.vehicles.sprinterInterior,
      assets.vehicles.sprinterRear
    ],
    specs: {
      length: "5,910 mm",
      height: "2,705 mm",
      width: "1,993 mm",
      wheelbase: "3,665 mm",
      loadVolume: "10.5 m³",
      seats: 3
    },
    description: "Heavy duty 3.5t GVM commercial rating with maximum payload allowance for machinery, plumbing stock, and electrical fit-outs.",
    includedFeatures: [
      "Comprehensive insurance",
      "Unlimited kilometres",
      "24/7 roadside assistance",
      "Scheduled servicing and maintenance",
      "3.5t payload rating",
      "Air Conditioning",
      "Automatic Transmission"
    ],
    useCases: ["trade", "construction", "moving"],
    inStock: true
  },
  {
    id: "2014-toyota-hiace-lwb-28t",
    slug: "2014-toyota-hiace-lwb-28t",
    name: "2014 Toyota Hiace LWB - XPDX",
    make: "Toyota",
    model: "HiAce LWB 2.8t",
    year: 2014,
    badge: "Standard roof · 2.8t · Automatic",
    roofType: "Standard roof",
    transmission: "Automatic",
    fuel: "Diesel",
    priceWeekly: 300,
    priceMonthly: 1200,
    minimumDays: 28,
    image: assets.vehicles.vehicle4,
    gallery: [
      assets.vehicles.vehicle4,
      assets.vehicles.vehicle1,
      assets.vehicles.hiaceRear
    ],
    specs: {
      length: "4,695 mm",
      height: "1,980 mm",
      width: "1,695 mm",
      wheelbase: "2,570 mm",
      loadVolume: "6.0 m³",
      seats: 2
    },
    description: "The benchmark courier delivery van across Greater Sydney. Automatic transmission, responsive diesel torque, and comfortable cabin.",
    includedFeatures: [
      "Comprehensive insurance",
      "Unlimited kilometres",
      "24/7 roadside assistance",
      "Scheduled servicing and maintenance",
      "Heavy duty tow bar optional",
      "Air Conditioning",
      "Automatic Transmission"
    ],
    useCases: ["courier", "delivery", "trade"],
    inStock: true
  },
  {
    id: "2014-toyota-hiace-slwb-highroof",
    slug: "2014-toyota-hiace-slwb-highroof",
    name: "2014 Toyota Hiace SLWB - XPDX",
    make: "Toyota",
    model: "HiAce Super LWB",
    year: 2014,
    badge: "High roof · 3.0t · Automatic",
    roofType: "High roof",
    transmission: "Automatic",
    fuel: "Diesel",
    priceWeekly: 350,
    priceMonthly: 1400,
    minimumDays: 28,
    image: assets.vehicles.vehicle5,
    gallery: [
      assets.vehicles.vehicle5,
      assets.vehicles.hiaceRear
    ],
    specs: {
      length: "5,380 mm",
      height: "2,285 mm",
      width: "1,880 mm",
      wheelbase: "3,110 mm",
      loadVolume: "9.8 m³",
      seats: 2
    },
    description: "Super Long Wheelbase HiAce offering massive length for piping, timber, roll carpets, and large courier loads with bulletproof Toyota reliability.",
    includedFeatures: [
      "Comprehensive insurance",
      "Unlimited kilometres",
      "24/7 roadside assistance",
      "Scheduled servicing and maintenance",
      "Extra wide body",
      "Air Conditioning",
      "Automatic Transmission"
    ],
    useCases: ["trade", "construction", "events", "courier"],
    inStock: true
  }
];

export const allComparisonVans = [
  { name: "2009 Toyota Hiace LWB - XPDX", length: "4,695 mm", height: "1,980 mm", price: "$300/wk", id: "2009-toyota-hiace-lwb" },
  { name: "2014 Mercedes-Benz Sprinter MWB", length: "5,910 mm", height: "2,705 mm", price: "$400/wk", id: "2014-mercedes-benz-sprinter-mwb-std" },
  { name: "2014 Mercedes-Benz Sprinter MWB - XPDX", length: "5,910 mm", height: "2,705 mm", price: "$400/wk", id: "2014-mercedes-benz-sprinter-mwb-35t" },
  { name: "2014 Toyota Hiace LWB - XPDX", length: "4,695 mm", height: "1,980 mm", price: "$300/wk", id: "2014-toyota-hiace-lwb-28t" },
  { name: "2014 Toyota Hiace SLWB - XPDX", length: "5,380 mm", height: "2,285 mm", price: "$350/wk", id: "2014-toyota-hiace-slwb-highroof" },
  { name: "2015 Mercedes-Benz Sprinter MWB - XPDX", length: "5,910 mm", height: "2,705 mm", price: "$400/wk", id: "2016-mercedes-benz-sprinter-mwb" },
  { name: "2015 Mercedes-Benz Sprinter SWB - XPDX", length: "5,245 mm", height: "2,435 mm", price: "$380/wk", id: "2014-mercedes-benz-sprinter-mwb-std" },
  { name: "2016 Mercedes-Benz Sprinter MWB - XPDX", length: "5,910 mm", height: "2,705 mm", price: "$400/wk", id: "2016-mercedes-benz-sprinter-mwb" }
];
