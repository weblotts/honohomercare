export interface Town {
  slug:       string;
  name:       string;
  county:     string;
  desc:       string;
  highlight:  string;
  imgIndex:   number;
}

export const towns: Town[] = [
  {
    slug:      "natick",
    name:      "Natick",
    county:    "Middlesex County",
    desc:      "A welcoming MetroWest community with strong senior services and easy access to major medical centers in the Greater Boston area.",
    highlight: "We provide in-home dementia care throughout Natick — from South Natick village to the neighborhoods near Lake Cochituate.",
    imgIndex:  0,
  },
  {
    slug:      "wellesley",
    name:      "Wellesley",
    county:    "Norfolk County",
    desc:      "A leafy, close-knit town known for its exceptional quality of life — and home to many families navigating the challenges of dementia care.",
    highlight: "Our caregivers serve families across all of Wellesley, including Wellesley Hills, Wellesley Farms, and the areas surrounding Wellesley College.",
    imgIndex:  1,
  },
  {
    slug:      "needham",
    name:      "Needham",
    county:    "Norfolk County",
    desc:      "A thriving suburban town with a strong sense of community, Needham is home to many older adults who wish to remain independent in their own homes.",
    highlight: "We support Needham families across the town center, Needham Heights, and surrounding neighborhoods with personalized dementia care.",
    imgIndex:  2,
  },
  {
    slug:      "dedham",
    name:      "Dedham",
    county:    "Norfolk County",
    desc:      "One of Massachusetts' oldest towns, Dedham combines historic charm with convenient access to Boston — making in-home care a natural fit for its senior residents.",
    highlight: "From Oakdale to Enfield, our caregivers support Dedham families with the consistency and specialist training that dementia care demands.",
    imgIndex:  3,
  },
  {
    slug:      "weston",
    name:      "Weston",
    county:    "Middlesex County",
    desc:      "An affluent, rural-feel community west of Boston where families value privacy, quality, and individualized care for their loved ones.",
    highlight: "We provide discreet, high-quality in-home dementia care to families throughout Weston's neighborhoods and estates.",
    imgIndex:  4,
  },
  {
    slug:      "sudbury",
    name:      "Sudbury",
    county:    "Middlesex County",
    desc:      "A historic town with a strong community fabric, Sudbury's older residents benefit from care that allows them to stay in the homes they've loved for decades.",
    highlight: "Our team serves Sudbury families across North Sudbury, South Sudbury, and the areas surrounding the town center.",
    imgIndex:  0,
  },
  {
    slug:      "lexington",
    name:      "Lexington",
    county:    "Middlesex County",
    desc:      "Famous for its revolutionary history, Lexington is also a community that takes exceptional care of its seniors — and Honor Home Care is proud to be part of that commitment.",
    highlight: "We provide specialist dementia care to families throughout Lexington, from the town center to East Lexington and beyond.",
    imgIndex:  1,
  },
  {
    slug:      "framingham",
    name:      "Framingham",
    county:    "Middlesex County",
    desc:      "As MetroWest's largest city, Framingham is home to a diverse community of older adults and families who deserve access to specialist dementia home care.",
    highlight: "We serve families across all of Framingham's neighborhoods — including Saxonville, Nobscot, and the areas near the Framingham State campus.",
    imgIndex:  2,
  },
  {
    slug:      "newton",
    name:      "Newton",
    county:    "Middlesex County",
    desc:      "One of Greater Boston's most desirable communities, Newton's 13 villages are home to many families caring for a loved one with Alzheimer's or another form of dementia.",
    highlight: "Our caregivers are familiar with every corner of Newton — from Newton Centre and Newton Highlands to Chestnut Hill and West Newton.",
    imgIndex:  3,
  },
  {
    slug:      "waltham",
    name:      "Waltham",
    county:    "Middlesex County",
    desc:      "Our home base. Founded right here in Waltham in 2013, Honor Home Care has deep roots in this vibrant city and a longstanding commitment to its senior community.",
    highlight: "As Waltham's specialist dementia care provider, we know this city intimately — from the Moody Street corridor to the neighborhoods bordering Lexington and Watertown.",
    imgIndex:  4,
  },
  {
    slug:      "watertown",
    name:      "Watertown",
    county:    "Middlesex County",
    desc:      "A compact, walkable city bordering Cambridge and Newton, Watertown is home to a close-knit senior population that values quality in-home care.",
    highlight: "We serve families throughout Watertown Square, East Watertown, and the neighborhoods along the Charles River.",
    imgIndex:  0,
  },
  {
    slug:      "concord",
    name:      "Concord",
    county:    "Middlesex County",
    desc:      "A town of historic character and natural beauty, Concord's residents value quality of life — including the kind of thoughtful, respectful dementia care that allows aging in place.",
    highlight: "Our caregivers support Concord families from the town center to West Concord and the neighborhoods near Walden Pond.",
    imgIndex:  1,
  },
  {
    slug:      "wayland",
    name:      "Wayland",
    county:    "Middlesex County",
    desc:      "A quiet, family-oriented town with strong ties to neighboring Natick and Framingham, Wayland is a place where seniors deeply value staying in their own homes.",
    highlight: "We provide consistent, specialist dementia care to families throughout Wayland, including Cochituate and the surrounding areas.",
    imgIndex:  2,
  },
  {
    slug:      "dover",
    name:      "Dover",
    county:    "Norfolk County",
    desc:      "One of Massachusetts' most rural and picturesque towns, Dover's older residents often seek high-quality in-home care that matches the privacy and quality of their surroundings.",
    highlight: "We serve Dover families with discreet, personalized dementia care tailored to their unique circumstances and environment.",
    imgIndex:  3,
  },
  {
    slug:      "sherborn",
    name:      "Sherborn",
    county:    "Middlesex County",
    desc:      "A small, rural community with a warm sense of belonging, Sherborn families often turn to Honor Home Care to help their loved ones remain at home safely.",
    highlight: "Our caregivers travel to Sherborn to provide the same high standard of specialist dementia care we deliver across Greater Boston and MetroWest.",
    imgIndex:  4,
  },
  {
    slug:      "holliston",
    name:      "Holliston",
    county:    "Middlesex County",
    desc:      "A welcoming small town south of Framingham, Holliston has a close-knit community where families support one another — and where in-home care makes a real difference.",
    highlight: "We serve Holliston families with consistent, expert dementia care — allowing their loved ones to remain in the community they've always called home.",
    imgIndex:  0,
  },
  {
    slug:      "brookline",
    name:      "Brookline",
    county:    "Norfolk County",
    desc:      "Bordering Boston and Cambridge, Brookline's diverse and educated community includes many families navigating the realities of caring for someone with dementia.",
    highlight: "Our caregivers serve families across all of Brookline — from Coolidge Corner and Brookline Village to Chestnut Hill and the neighborhoods near the Emerald Necklace.",
    imgIndex:  1,
  },
  {
    slug:      "cambridge",
    name:      "Cambridge",
    county:    "Middlesex County",
    desc:      "Home to Harvard, MIT, and a world-class healthcare ecosystem, Cambridge families have high expectations for care — and we meet them with specialist dementia expertise.",
    highlight: "We provide in-home dementia care across all of Cambridge's neighborhoods — from Harvard Square and Inman Square to East Cambridge and North Cambridge.",
    imgIndex:  2,
  },
];

export const IMAGES = [
  "/images/caretaker-elderly.jpg",
  "/images/holding-hands.jpg",
  "/images/dementia-care.jpg",
  "/images/caretaker-elderly.jpg",
  "/images/holding-hands.jpg",
];

export function getTown(slug: string): Town | undefined {
  return towns.find((t) => t.slug === slug);
}

// Grouped for display on home page / footer
export const townGroups = [
  {
    region: "Greater Boston",
    towns: ["Newton", "Brookline", "Cambridge", "Watertown", "Waltham", "Lexington"],
  },
  {
    region: "MetroWest",
    towns: ["Framingham", "Natick", "Wellesley", "Wayland", "Sudbury", "Holliston"],
  },
  {
    region: "South & Southwest",
    towns: ["Needham", "Dedham", "Dover", "Sherborn"],
  },
  {
    region: "Outer West",
    towns: ["Concord", "Weston"],
  },
];
