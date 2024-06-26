const users = [
    {
      id: 1,
      name: "John Doe",
      gender: "male",
      location: "New York",
      university: "NYU",
      interests: ["sports", "music"],
    },
    {
      id: 2,
      name: "Jane Smith",
      gender: "female",
      location: "New York",
      university: "NYU",
      interests: ["art", "reading"],
    },
    {
      id: 3,
      name: "Alice Johnson",
      gender: "female",
      location: "Boston",
      university: "Harvard University",
      interests: ["science", "technology"],
    },
    {
      id: 4,
      name: "Bob Brown",
      gender: "male",
      location: "Kuala Lumpur",
      university: "Sunway University",
      interests: ["traveling", "cooking"],
    },
    {
      id: 5,
      name: "Charlie Davis",
      gender: "male",
      location: "New York",
      university: "NYU",
      interests: ["photography", "gaming"],
    },
    {
      id: 6,
      name: "Daisy Miller",
      gender: "female",
      location: "Kuala Lumpur",
      university: "Sunway University",
      interests: ["fashion", "design"],
    },
    {
      id: 7,
      name: "Edward Wilson",
      gender: "male",
      location: "Boston",
      university: "Harvard University",
      interests: ["history", "writing"],
    },
    {
      id: 8,
      name: "Fiona White",
      gender: "female",
      location: "New York",
      university: "NYU",
      interests: ["dancing", "painting"],
    },
    {
      id: 9,
      name: "George King",
      gender: "male",
      location: "Kuala Lumpur",
      university: "Sunway University",
      interests: ["sports", "reading"],
    },
    {
      id: 10,
      name: "Hannah Lee",
      gender: "female",
      location: "Boston",
      university: "Harvard University",
      interests: ["music", "yoga"],
    },
    {
      id: 11,
      name: "Ian Thomas",
      gender: "male",
      location: "New York",
      university: "NYU",
      interests: ["movies", "theater"],
    },
    {
      id: 12,
      name: "Jenna Scott",
      gender: "female",
      location: "Kuala Lumpur",
      university: "Sunway University",
      interests: ["traveling", "photography"],
    },
    {
      id: 13,
      name: "Kevin Harris",
      gender: "male",
      location: "Boston",
      university: "Harvard University",
      interests: ["technology", "gaming"],
    },
    {
      id: 14,
      name: "Laura Adams",
      gender: "female",
      location: "New York",
      university: "NYU",
      interests: ["reading", "writing"],
    },
    {
      id: 15,
      name: "Michael Robinson",
      gender: "male",
      location: "Kuala Lumpur",
      university: "Sunway University",
      interests: ["cooking", "traveling"],
    },
    {
      id: 16,
      name: "Natalie Martinez",
      gender: "female",
      location: "Boston",
      university: "Harvard University",
      interests: ["dancing", "fitness"],
    },
    {
      id: 17,
      name: "Oliver Clark",
      gender: "male",
      location: "New York",
      university: "NYU",
      interests: ["music", "art"],
    },
    {
      id: 18,
      name: "Paula Rodriguez",
      gender: "female",
      location: "Kuala Lumpur",
      university: "Sunway University",
      interests: ["fashion", "design"],
    },
    {
      id: 19,
      name: "Quinn Walker",
      gender: "male",
      location: "Boston",
      university: "Harvard University",
      interests: ["sports", "science"],
    },
    {
      id: 20,
      name: "Rachel Lewis",
      gender: "female",
      location: "New York",
      university: "NYU",
      interests: ["yoga", "reading"],
    },
    {
      id: 21,
      name: "Samuel Young",
      gender: "male",
      location: "Kuala Lumpur",
      university: "Sunway University",
      interests: ["traveling", "writing"],
    },
    {
      id: 22,
      name: "Tina Allen",
      gender: "female",
      location: "Boston",
      university: "Harvard University",
      interests: ["technology", "movies"],
    },
    {
      id: 23,
      name: "Umar Nelson",
      gender: "male",
      location: "New York",
      university: "NYU",
      interests: ["art", "gaming"],
    },
    {
      id: 24,
      name: "Victoria Hill",
      gender: "female",
      location: "Kuala Lumpur",
      university: "Sunway University",
      interests: ["photography", "music"],
    },
    {
      id: 25,
      name: "William Wright",
      gender: "male",
      location: "Boston",
      university: "Harvard University",
      interests: ["history", "reading"],
    },
    {
      id: 26,
      name: "Xenia Baker",
      gender: "female",
      location: "New York",
      university: "NYU",
      interests: ["dancing", "writing"],
    },
    {
      id: 27,
      name: "Yusuf Scott",
      gender: "male",
      location: "Kuala Lumpur",
      university: "Sunway University",
      interests: ["sports", "cooking"],
    },
    {
      id: 28,
      name: "Zara Mitchell",
      gender: "female",
      location: "Boston",
      university: "Harvard University",
      interests: ["fashion", "art"],
    },
    {
      id: 29,
      name: "Adam Green",
      gender: "male",
      location: "New York",
      university: "NYU",
      interests: ["gaming", "technology"],
    },
    {
      id: 30,
      name: "Bethany Clark",
      gender: "female",
      location: "Kuala Lumpur",
      university: "Sunway University",
      interests: ["reading", "science"],
    },
    {
      id: 31,
      name: "Cameron Bell",
      gender: "male",
      location: "Boston",
      university: "Harvard University",
      interests: ["movies", "photography"],
    },
    {
      id: 32,
      name: "Danielle Rogers",
      gender: "female",
      location: "New York",
      university: "NYU",
      interests: ["music", "writing"],
    },
    {
      id: 33,
      name: "Evan Cook",
      gender: "male",
      location: "Kuala Lumpur",
      university: "Sunway University",
      interests: ["fitness", "traveling"],
    },
    {
      id: 34,
      name: "Faith Cooper",
      gender: "female",
      location: "Boston",
      university: "Harvard University",
      interests: ["dancing", "technology"],
    },
    {
      id: 35,
      name: "Gavin Stewart",
      gender: "male",
      location: "New York",
      university: "NYU",
      interests: ["sports", "movies"],
    },
    {
      id: 36,
      name: "Holly Reed",
      gender: "female",
      location: "Kuala Lumpur",
      university: "Sunway University",
      interests: ["art", "cooking"],
    },
    {
      id: 37,
      name: "Isaac Morris",
      gender: "male",
      location: "Boston",
      university: "Harvard University",
      interests: ["science", "writing"],
    },
    {
      id: 38,
      name: "Jasmine Price",
      gender: "female",
      location: "New York",
      university: "NYU",
      interests: ["photography", "fitness"],
    },
    {
      id: 39,
      name: "Kyle Jenkins",
      gender: "male",
      location: "Kuala Lumpur",
      university: "Sunway University",
      interests: ["technology", "gaming"],
    },
    {
      id: 40,
      name: "Lydia Barnes",
      gender: "female",
      location: "Boston",
      university: "Harvard University",
      interests: ["music", "movies"],
    },
    {
      id: 41,
      name: "Maxwell Perry",
      gender: "male",
      location: "New York",
      university: "NYU",
      interests: ["traveling", "reading"],
    },
    {
      id: 42,
      name: "Nina Foster",
      gender: "female",
      location: "Kuala Lumpur",
      university: "Sunway University",
      interests: ["fashion", "writing"],
    },
    {
        id:43,
        name: "Kurniwan Wahyudi",
        gender: "male",
        location: "Sabah",
        university: "UITM University",
        interests: ["singing",]
    }
  ];
  
  export default users;