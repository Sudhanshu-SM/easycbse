// NCERT Books Data - All Classes 1-12 with Subjects and Chapters
// PDFs are self-hosted in public/pdfs folder
// Download PDFs from NCERT and place them in the appropriate folders

export interface Chapter {
    number: number;
    title: string;
    pdfUrl: string;
}

export interface Subject {
    id: string;
    name: string;
    book: string;
    icon: string;
    chapters: Chapter[];
}

export interface ClassData {
    id: number;
    name: string;
    subjects: Subject[];
}

// Helper function to generate local PDF path
const pdf = (classId: number, subject: string, chapter: number) =>
    `/pdfs/class-${classId}/${subject}/chapter-${chapter}.pdf`;

export const classes: ClassData[] = [
        {
        id: 1,
        name: "Class 1",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Mridang",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Two Little Hands", pdfUrl: pdf(1, "english", 1) },
                    { number: 2, title: "Greetings", pdfUrl: pdf(1, "english", 2) },
                    { number: 3, title: "Picture Time", pdfUrl: pdf(1, "english", 3) },
                    { number: 4, title: "The Cap-seller and the Monkeys", pdfUrl: pdf(1, "english", 4) },
                    { number: 5, title: "A Farm", pdfUrl: pdf(1, "english", 5) },
                    { number: 6, title: "Fun with Pictures", pdfUrl: pdf(1, "english", 6) },
                    { number: 7, title: "The Food We Eat", pdfUrl: pdf(1, "english", 7) },
                    { number: 8, title: "The Four Seasons", pdfUrl: pdf(1, "english", 8) },
                    { number: 9, title: "Anandi's Rainbow", pdfUrl: pdf(1, "english", 9) }
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Sarangi",
                icon: "हिं",
                chapters: [
                    { number: 1, title: "मीना का परिवार", pdfUrl: pdf(1, "hindi", 1) },
                    { number: 2, title: "दादा-दादी", pdfUrl: pdf(1, "hindi", 2) },
                    { number: 3, title: "रीना का दिन", pdfUrl: pdf(1, "hindi", 3) },
                    { number: 4, title: "रानी भी", pdfUrl: pdf(1, "hindi", 4) },
                    { number: 5, title: "मिठाई", pdfUrl: pdf(1, "hindi", 5) },
                    { number: 6, title: "तीन साथी", pdfUrl: pdf(1, "hindi", 6) },
                    { number: 7, title: "वाह, मेरे घोड़े!", pdfUrl: pdf(1, "hindi", 7) },
                    { number: 8, title: "खतरे में साँप", pdfUrl: pdf(1, "hindi", 8) },
                    { number: 9, title: "आलू की सड़क", pdfUrl: pdf(1, "hindi", 9) },
                    { number: 10, title: "झूलम-झूली", pdfUrl: pdf(1, "hindi", 10) },
                    { number: 11, title: "भुट्टे", pdfUrl: pdf(1, "hindi", 11) },
                    { number: 12, title: "फूली रोटी", pdfUrl: pdf(1, "hindi", 12) },
                    { number: 13, title: "मेला", pdfUrl: pdf(1, "hindi", 13) },
                    { number: 14, title: "बरखा और मेघा", pdfUrl: pdf(1, "hindi", 14) },
                    { number: 15, title: "होली", pdfUrl: pdf(1, "hindi", 15) },
                    { number: 16, title: "जन्मदिवस पर पेड़ जगाओ", pdfUrl: pdf(1, "hindi", 16) },
                    { number: 17, title: "हवा", pdfUrl: pdf(1, "hindi", 17) },
                    { number: 18, title: "कितनी प्यारी है ये दुनिया", pdfUrl: pdf(1, "hindi", 18) },
                    { number: 19, title: "चाँद का बच्चा", pdfUrl: pdf(1, "hindi", 19) }
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Joyful Mathematics",
                icon: "🔢",
                chapters: [
                    { number: 1, title: "Relations and Functions", pdfUrl: pdf(1, "math", 1) },
                    { number: 2, title: "Inverse Trigonometric Functions", pdfUrl: pdf(1, "math", 2) },
                    { number: 3, title: "Matrices", pdfUrl: pdf(1, "math", 3) },
                    { number: 4, title: "Determinants", pdfUrl: pdf(1, "math", 4) },
                    { number: 5, title: "Continuity and Differentiability", pdfUrl: pdf(1, "math", 5) },
                    { number: 6, title: "Application of Derivatives", pdfUrl: pdf(1, "math", 6) },
                    { number: 7, title: "Integrals", pdfUrl: pdf(1, "math", 7) },
                    { number: 8, title: "Application of Integrals", pdfUrl: pdf(1, "math", 8) },
                    { number: 9, title: "Differential Equations", pdfUrl: pdf(1, "math", 9) },
                    { number: 10, title: "Vector Algebra", pdfUrl: pdf(1, "math", 10) },
                    { number: 11, title: "Three Dimensional Geometry", pdfUrl: pdf(1, "math", 11) },
                    { number: 12, title: "Linear Programming", pdfUrl: pdf(1, "math", 12) },
                    { number: 13, title: "Probability", pdfUrl: pdf(1, "math", 13) }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Class 2",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Mridang",
                icon: "📖",
                chapters: [
                    { number: 1, title: "My Bicycle", pdfUrl: pdf(2, "english", 1) },
                    { number: 2, title: "Picture Reading", pdfUrl: pdf(2, "english", 2) },
                    { number: 3, title: "It is Fun", pdfUrl: pdf(2, "english", 3) },
                    { number: 4, title: "Seeing without Seeing", pdfUrl: pdf(2, "english", 4) },
                    { number: 5, title: "Come Back Soon", pdfUrl: pdf(2, "english", 5) },
                    { number: 6, title: "Between Home and School", pdfUrl: pdf(2, "english", 6) },
                    { number: 7, title: "This is My Town", pdfUrl: pdf(2, "english", 7) },
                    { number: 8, title: "Show a Little Kindness", pdfUrl: pdf(2, "english", 8) },
                    { number: 9, title: "The Mouse", pdfUrl: pdf(2, "english", 9) },
                    { number: 10, title: "Little Drops of Water", pdfUrl: pdf(2, "english", 10) },
                    { number: 11, title: "Storm in the Garden", pdfUrl: pdf(2, "english", 11) },
                    { number: 12, title: "A Wee Little Frog", pdfUrl: pdf(2, "english", 12) },
                    { number: 13, title: "Off to School", pdfUrl: pdf(2, "english", 13) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Sarangi",
                icon: "हिं",
                chapters: [
                    { number: 1, title: "परिवार (चित्र और बातचीत)", pdfUrl: pdf(2, "hindi", 1) },
                    { number: 2, title: "पापा, क्यों अच्छा लगता है", pdfUrl: pdf(2, "hindi", 2) },
                    { number: 3, title: "माला की चाँदी की पायल", pdfUrl: pdf(2, "hindi", 3) },
                    { number: 4, title: "माँ", pdfUrl: pdf(2, "hindi", 4) },
                    { number: 5, title: "थाथू और मैं", pdfUrl: pdf(2, "hindi", 5) },
                    { number: 6, title: "चींटा", pdfUrl: pdf(2, "hindi", 6) },
                    { number: 7, title: "स्कूल गए", pdfUrl: pdf(2, "hindi", 7) },
                    { number: 8, title: "तीन दोस्त", pdfUrl: pdf(2, "hindi", 8) },
                    { number: 9, title: "दुनिया रंग-बिरंगी", pdfUrl: pdf(2, "hindi", 9) },
                    { number: 10, title: "कौन", pdfUrl: pdf(2, "hindi", 10) },
                    { number: 11, title: "बैंगनी जोजो", pdfUrl: pdf(2, "hindi", 11) },
                    { number: 12, title: "तोसिया का सपना", pdfUrl: pdf(2, "hindi", 12) },
                    { number: 13, title: "तालाब", pdfUrl: pdf(2, "hindi", 13) },
                    { number: 14, title: "बीज", pdfUrl: pdf(2, "hindi", 14) },
                    { number: 15, title: "किसान", pdfUrl: pdf(2, "hindi", 15) },
                    { number: 16, title: "मूली", pdfUrl: pdf(2, "hindi", 16) },
                    { number: 17, title: "बरसात और मेंढक", pdfUrl: pdf(2, "hindi", 17) },
                    { number: 18, title: "शेर और चूहे की दोस्ती", pdfUrl: pdf(2, "hindi", 18) },
                    { number: 19, title: "आउट", pdfUrl: pdf(2, "hindi", 19) },
                    { number: 20, title: "छुपन-छुपाई", pdfUrl: pdf(2, "hindi", 20) },
                    { number: 21, title: "हाथी साइकिल चला रहा है", pdfUrl: pdf(2, "hindi", 21) },
                    { number: 22, title: "चार दिशाएँ", pdfUrl: pdf(2, "hindi", 22) },
                    { number: 23, title: "चंदा मामा", pdfUrl: pdf(2, "hindi", 23) },
                    { number: 24, title: "गिरे ताल में चंदा मामा", pdfUrl: pdf(2, "hindi", 24) },
                    { number: 25, title: "सबसे बड़ा छाता", pdfUrl: pdf(2, "hindi", 25) },
                    { number: 26, title: "बादल", pdfUrl: pdf(2, "hindi", 26) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Joyful Mathematics",
                icon: "📐",
                chapters: [
                    { number: 1, title: "A Day at the Beach", pdfUrl: pdf(2, "math", 1) },
                    { number: 2, title: "Shapes Around us", pdfUrl: pdf(2, "math", 2) },
                    { number: 3, title: "Fun with Numbers", pdfUrl: pdf(2, "math", 3) },
                    { number: 4, title: "Shadow Story", pdfUrl: pdf(2, "math", 4) },
                    { number: 5, title: "Playing with Lines", pdfUrl: pdf(2, "math", 5) },
                    { number: 6, title: "Decoration for Festival", pdfUrl: pdf(2, "math", 6) },
                    { number: 7, title: "Rani's Gift", pdfUrl: pdf(2, "math", 7) },
                    { number: 8, title: "Grouping and Sharing", pdfUrl: pdf(2, "math", 8) },
                    { number: 9, title: "Which Season is it?", pdfUrl: pdf(2, "math", 9) },
                    { number: 10, title: "Fun at the Fair", pdfUrl: pdf(2, "math", 10) },
                    { number: 11, title: "Data Handling", pdfUrl: pdf(2, "math", 11) },
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Class 3",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Santoor",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Fun with Friends", pdfUrl: pdf(3, "english", 1) },
                    { number: 2, title: "Badal and Moti", pdfUrl: pdf(3, "english", 2) },
                    { number: 3, title: "Best Friends", pdfUrl: pdf(3, "english", 3) },
                    { number: 4, title: "Toys and Games", pdfUrl: pdf(3, "english", 4) },
                    { number: 5, title: "Talking Toys", pdfUrl: pdf(3, "english", 5) },
                    { number: 6, title: "Paper Boats", pdfUrl: pdf(3, "english", 6) },
                    { number: 7, title: "Good Food", pdfUrl: pdf(3, "english", 7) },
                    { number: 8, title: "Thank God!", pdfUrl: pdf(3, "english", 8) },
                    { number: 9, title: "Madhu's Wish", pdfUrl: pdf(3, "english", 9) },
                    { number: 10, title: "The Sky", pdfUrl: pdf(3, "english", 10) },
                    { number: 11, title: "Chanda Mama Counts the Stars", pdfUrl: pdf(3, "english", 11) },
                    { number: 12, title: "Chandrayaan", pdfUrl: pdf(3, "english", 12) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Veena",
                icon: "हिं",
                chapters: [
                    { number: 1, title: "सीखो", pdfUrl: pdf(3, "hindi", 1) },
                    { number: 2, title: "चींटी", pdfUrl: pdf(3, "hindi", 2) },
                    { number: 3, title: "कितने पैर?", pdfUrl: pdf(3, "hindi", 3) },
                    { number: 4, title: "बया हमारी", pdfUrl: pdf(3, "hindi", 4) },
                    { number: 5, title: "आम का पेड़", pdfUrl: pdf(3, "hindi", 5) },
                    { number: 6, title: "बीरबल की खिचड़ी", pdfUrl: pdf(3, "hindi", 6) },
                    { number: 7, title: "मित्र को पत्र", pdfUrl: pdf(3, "hindi", 7) },
                    { number: 8, title: "चतुर चूहा", pdfUrl: pdf(3, "hindi", 8) },
                    { number: 9, title: "फूलदेई", pdfUrl: pdf(3, "hindi", 9) },
                    { number: 10, title: "सुनो भई गप्प", pdfUrl: pdf(3, "hindi", 10) },
                    { number: 11, title: "एक जादुई लपटारा", pdfUrl: pdf(3, "hindi", 11) },
                    { number: 12, title: "अपना-अपना काम", pdfUrl: pdf(3, "hindi", 12) },
                    { number: 13, title: "पेड़ों की अम्मा", pdfUrl: pdf(3, "hindi", 13) },
                    { number: 14, title: "किसान की होशियारी", pdfUrl: pdf(3, "hindi", 14) },
                    { number: 15, title: "भारत", pdfUrl: pdf(3, "hindi", 15) },
                    { number: 16, title: "चंद्रयान", pdfUrl: pdf(3, "hindi", 16) },
                    { number: 17, title: "बोलने वाली माँद", pdfUrl: pdf(3, "hindi", 17) },
                    { number: 18, title: "हम अनेक किंतु एक", pdfUrl: pdf(3, "hindi", 18) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Maths Mela",
                icon: "📐",
                chapters: [
                    { number: 1, title: "What's in a Name?", pdfUrl: pdf(3, "math", 1) },
                    { number: 2, title: "Toy Joy", pdfUrl: pdf(3, "math", 2) },
                    { number: 3, title: "Double Century", pdfUrl: pdf(3, "math", 3) },
                    { number: 4, title: "Vacation with My Nani Maa", pdfUrl: pdf(3, "math", 4) },
                    { number: 5, title: "Fun with Shapes", pdfUrl: pdf(3, "math", 5) },
                    { number: 6, title: "House of Hundreds - I", pdfUrl: pdf(3, "math", 6) },
                    { number: 7, title: "Raksha Bandhan", pdfUrl: pdf(3, "math", 7) },
                    { number: 8, title: "Fair Share", pdfUrl: pdf(3, "math", 8) },
                    { number: 9, title: "House of Hundreds - II", pdfUrl: pdf(3, "math", 9) },
                    { number: 10, title: "Fun at Class Party!", pdfUrl: pdf(3, "math", 10) },
                    { number: 11, title: "Filling and Lifting", pdfUrl: pdf(3, "math", 11) },
                    { number: 12, title: "Give and Take", pdfUrl: pdf(3, "math", 12) },
                    { number: 13, title: "Time Goes On", pdfUrl: pdf(3, "math", 13) },
                    { number: 14, title: "The Surajkund Fair", pdfUrl: pdf(3, "math", 14) },
                ]
            },
            {
                id: "evs",
                name: "EVS",
                book: "Our Wondrous World",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "Our Families and Communities", pdfUrl: pdf(3, "evs", 1) },
                    { number: 2, title: "Going to the Mela", pdfUrl: pdf(3, "evs", 2) },
                    { number: 3, title: "Celebrating Festivals", pdfUrl: pdf(3, "evs", 3) },
                    { number: 4, title: "Life Around Us", pdfUrl: pdf(3, "evs", 4) },
                    { number: 5, title: "Plants and Animals Live Together", pdfUrl: pdf(3, "evs", 5) },
                    { number: 6, title: "Living in Harmony", pdfUrl: pdf(3, "evs", 6) },
                    { number: 7, title: "Gifts of Nature", pdfUrl: pdf(3, "evs", 7) },
                    { number: 8, title: "Food We Eat", pdfUrl: pdf(3, "evs", 8) },
                    { number: 9, title: "Staying Healthy and Happy", pdfUrl: pdf(3, "evs", 9) },
                    { number: 10, title: "Things Around Us", pdfUrl: pdf(3, "evs", 10) },
                    { number: 11, title: "Making Things", pdfUrl: pdf(3, "evs", 11) },
                    { number: 12, title: "Taking Charge of Waste", pdfUrl: pdf(3, "evs", 12) },
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Class 4",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Santoor",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Together We Can", pdfUrl: pdf(4, "english", 1) },
                    { number: 2, title: "The Tinkling Bells", pdfUrl: pdf(4, "english", 2) },
                    { number: 3, title: "Be Smart, Be Safe", pdfUrl: pdf(4, "english", 3) },
                    { number: 4, title: "One Thing at a Time", pdfUrl: pdf(4, "english", 4) },
                    { number: 5, title: "The Old Stag", pdfUrl: pdf(4, "english", 5) },
                    { number: 6, title: "Braille", pdfUrl: pdf(4, "english", 6) },
                    { number: 7, title: "Fit Body, Fit Mind, Fit Nation", pdfUrl: pdf(4, "english", 7) },
                    { number: 8, title: "The Lagori Champions", pdfUrl: pdf(4, "english", 8) },
                    { number: 9, title: "Hekko", pdfUrl: pdf(4, "english", 9) },
                    { number: 10, title: "The Swing", pdfUrl: pdf(4, "english", 10) },
                    { number: 11, title: "A Journey to the Magical Mountains", pdfUrl: pdf(4, "english", 11) },
                    { number: 12, title: "Maheshwar", pdfUrl: pdf(4, "english", 12) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Veena",
                icon: "हिं",
                chapters: [
                    { number: 1, title: "चिड़िया का गीत", pdfUrl: pdf(4, "hindi", 1) },
                    { number: 2, title: "बगीचे का घोंघा", pdfUrl: pdf(4, "hindi", 2) },
                    { number: 3, title: "नीम", pdfUrl: pdf(4, "hindi", 3) },
                    { number: 4, title: "हमारा आहार", pdfUrl: pdf(4, "hindi", 4) },
                    { number: 5, title: "आसमान गिरा", pdfUrl: pdf(4, "hindi", 5) },
                    { number: 6, title: "जयपुर से पत्र", pdfUrl: pdf(4, "hindi", 6) },
                    { number: 7, title: "नकली हीरे", pdfUrl: pdf(4, "hindi", 7) },
                    { number: 8, title: "ओणम के रंग", pdfUrl: pdf(4, "hindi", 8) },
                    { number: 9, title: "मिठाइयों का सम्मेलन", pdfUrl: pdf(4, "hindi", 9) },
                    { number: 10, title: "कैमरा", pdfUrl: pdf(4, "hindi", 10) },
                    { number: 11, title: "कविता का कमाल", pdfUrl: pdf(4, "hindi", 11) },
                    { number: 12, title: "शतरंज में मात", pdfUrl: pdf(4, "hindi", 12) },
                    { number: 13, title: "हमारा आदित्य", pdfUrl: pdf(4, "hindi", 13) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Maths Mela",
                icon: "📐",
                chapters: [
                    { number: 1, title: "Shapes Around Us", pdfUrl: pdf(4, "math", 1) },
                    { number: 2, title: "Hide and Seek", pdfUrl: pdf(4, "math", 2) },
                    { number: 3, title: "Pattern Around Us", pdfUrl: pdf(4, "math", 3) },
                    { number: 4, title: "Thousands Around Us", pdfUrl: pdf(4, "math", 4) },
                    { number: 5, title: "Sharing and Measuring", pdfUrl: pdf(4, "math", 5) },
                    { number: 6, title: "Measuring Length", pdfUrl: pdf(4, "math", 6) },
                    { number: 7, title: "The Cleanest Village", pdfUrl: pdf(4, "math", 7) },
                    { number: 8, title: "Weigh it, Pour it", pdfUrl: pdf(4, "math", 8) },
                    { number: 9, title: "Equal Groups", pdfUrl: pdf(4, "math", 9) },
                    { number: 10, title: "Elephants, Tigers, and Leopards", pdfUrl: pdf(4, "math", 10) },
                    { number: 11, title: "Fun with Symmetry", pdfUrl: pdf(4, "math", 11) },
                    { number: 12, title: "Ticking Clocks and Turning Calendar", pdfUrl: pdf(4, "math", 12) },
                    { number: 13, title: "The Transport Museum", pdfUrl: pdf(4, "math", 13) },
                    { number: 14, title: "Data Handling", pdfUrl: pdf(4, "math", 14) },
                ]
            },
            {
                id: "evs",
                name: "EVS",
                book: "Our Wondrous World",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "Living Together", pdfUrl: pdf(4, "evs", 1) },
                    { number: 2, title: "Exploring Our Neighbourhood", pdfUrl: pdf(4, "evs", 2) },
                    { number: 3, title: "Nature Trail", pdfUrl: pdf(4, "evs", 3) },
                    { number: 4, title: "Growing up with Nature", pdfUrl: pdf(4, "evs", 4) },
                    { number: 5, title: "Food for Health", pdfUrl: pdf(4, "evs", 5) },
                    { number: 6, title: "Happy and Healthy Living", pdfUrl: pdf(4, "evs", 6) },
                    { number: 7, title: "How Things Work", pdfUrl: pdf(4, "evs", 7) },
                    { number: 8, title: "How Things are Made", pdfUrl: pdf(4, "evs", 8) },
                    { number: 9, title: "Different Lands, Different Lives", pdfUrl: pdf(4, "evs", 9) },
                    { number: 10, title: "Our Sky", pdfUrl: pdf(4, "evs", 10) },
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Class 5",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Santoor",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Papa's Spectacles", pdfUrl: pdf(5, "english", 1) },
                    { number: 2, title: "Gone with the Scooter", pdfUrl: pdf(5, "english", 2) },
                    { number: 3, title: "The Rainbow", pdfUrl: pdf(5, "english", 3) },
                    { number: 4, title: "The Wise Parrot", pdfUrl: pdf(5, "english", 4) },
                    { number: 5, title: "The Frog", pdfUrl: pdf(5, "english", 5) },
                    { number: 6, title: "What a Tank", pdfUrl: pdf(5, "english", 6) },
                    { number: 7, title: "Gilli Danda", pdfUrl: pdf(5, "english", 7) },
                    { number: 8, title: "The Decision of the Panchayat", pdfUrl: pdf(5, "english", 8) },
                    { number: 9, title: "Vocation", pdfUrl: pdf(5, "english", 9) },
                    { number: 10, title: "Glass Bangles", pdfUrl: pdf(5, "english", 10) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Veena",
                icon: "हिं",
                chapters: [
                    { number: 1, title: "किरन", pdfUrl: pdf(5, "hindi", 1) },
                    { number: 2, title: "न्याय की कुर्सी", pdfUrl: pdf(5, "hindi", 2) },
                    { number: 3, title: "चाँद का कुर्ता", pdfUrl: pdf(5, "hindi", 3) },
                    { number: 4, title: "साङकेन", pdfUrl: pdf(5, "hindi", 4) },
                    { number: 5, title: "सुंदरिया", pdfUrl: pdf(5, "hindi", 5) },
                    { number: 6, title: "चतुर चित्रकार", pdfUrl: pdf(5, "hindi", 6) },
                    { number: 7, title: "मेरा बचपन", pdfUrl: pdf(5, "hindi", 7) },
                    { number: 8, title: "काजीरंगा राष्ट्रीय उद्यान की यात्रा", pdfUrl: pdf(5, "hindi", 8) },
                    { number: 9, title: "न्याय", pdfUrl: pdf(5, "hindi", 9) },
                    { number: 10, title: "तीन मछलियाँ", pdfUrl: pdf(5, "hindi", 10) },
                    { number: 11, title: "हमारे ये कलामंदिर", pdfUrl: pdf(5, "hindi", 11) },
                    { number: 12, title: "गंगा की कहानी", pdfUrl: pdf(5, "hindi", 12) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Maths Mela",
                icon: "📐",
                chapters: [
                    { number: 1, title: "We the Travellers—I", pdfUrl: pdf(5, "math", 1) },
                    { number: 2, title: "Fractions", pdfUrl: pdf(5, "math", 2) },
                    { number: 3, title: "Angles as Turns", pdfUrl: pdf(5, "math", 3) },
                    { number: 4, title: "We the Travellers—II", pdfUrl: pdf(5, "math", 4) },
                    { number: 5, title: "Far and Near", pdfUrl: pdf(5, "math", 5) },
                    { number: 6, title: "The Dairy Farm", pdfUrl: pdf(5, "math", 6) },
                    { number: 7, title: "Shapes and Patterns", pdfUrl: pdf(5, "math", 7) },
                    { number: 8, title: "Weight and Capacity", pdfUrl: pdf(5, "math", 8) },
                    { number: 9, title: "Coconut Farm", pdfUrl: pdf(5, "math", 9) },
                    { number: 10, title: "Symmetrical Designs", pdfUrl: pdf(5, "math", 10) },
                    { number: 11, title: "Grandmother's Quilt", pdfUrl: pdf(5, "math", 11) },
                    { number: 12, title: "Racing Seconds", pdfUrl: pdf(5, "math", 12) },
                    { number: 13, title: "Animal Jumps", pdfUrl: pdf(5, "math", 13) },
                    { number: 14, title: "Maps and Locations", pdfUrl: pdf(5, "math", 14) },
                    { number: 15, title: "Data Through Pictures", pdfUrl: pdf(5, "math", 15) },
                ]
            },
            {
                id: "evs",
                name: "EVS",
                book: "Our Wondrous World",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "Water—The Essence of Life", pdfUrl: pdf(5, "evs", 1) },
                    { number: 2, title: "Journey of a River", pdfUrl: pdf(5, "evs", 2) },
                    { number: 3, title: "The Mystery of Food", pdfUrl: pdf(5, "evs", 3) },
                    { number: 4, title: "Our School—A Happy Place", pdfUrl: pdf(5, "evs", 4) },
                    { number: 5, title: "Our Vibrant Country", pdfUrl: pdf(5, "evs", 5) },
                    { number: 6, title: "Some Unique Places", pdfUrl: pdf(5, "evs", 6) },
                    { number: 7, title: "Energy—How Things Work", pdfUrl: pdf(5, "evs", 7) },
                    { number: 8, title: "Clothes—How Things are Made", pdfUrl: pdf(5, "evs", 8) },
                    { number: 9, title: "Rhythms of Nature", pdfUrl: pdf(5, "evs", 9) },
                    { number: 10, title: "Earth—Our Shared Home", pdfUrl: pdf(5, "evs", 10) },
                ]
            }
        ]
    },
    {
        id: 6,
        name: "Class 6",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Poorvi",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Unit 1: Fables and Folk Tales", pdfUrl: pdf(6, "english", 1) },
                    { number: 2, title: "Unit 2: Friendship", pdfUrl: pdf(6, "english", 2) },
                    { number: 3, title: "Unit 3: Nurturing Nature", pdfUrl: pdf(6, "english", 3) },
                    { number: 4, title: "Unit 4: Sports and Wellness", pdfUrl: pdf(6, "english", 4) },
                    { number: 5, title: "Unit 5: Culture and Tradition", pdfUrl: pdf(6, "english", 5) }
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Malhar",
                icon: "हिं",
                chapters: [
                    { number: 1, title: "मातृभूमि", pdfUrl: pdf(6, "hindi", 1) },
                    { number: 2, title: "गोल", pdfUrl: pdf(6, "hindi", 2) },
                    { number: 3, title: "एक और एक ग्यारह", pdfUrl: pdf(6, "hindi", 3) },
                    { number: 4, title: "पेड़ की महिमा", pdfUrl: pdf(6, "hindi", 4) },
                    { number: 5, title: "हार की जीत", pdfUrl: pdf(6, "hindi", 5) },
                    { number: 6, title: "सबसे बड़ा मूर्ख", pdfUrl: pdf(6, "hindi", 6) },
                    { number: 7, title: "चिड़िया की आँख", pdfUrl: pdf(6, "hindi", 7) },
                    { number: 8, title: "अनोखा उपहार", pdfUrl: pdf(6, "hindi", 8) },
                    { number: 9, title: "मैं भी", pdfUrl: pdf(6, "hindi", 9) },
                    { number: 10, title: "नदी", pdfUrl: pdf(6, "hindi", 10) },
                    { number: 11, title: "एक दिन की बादशाहत", pdfUrl: pdf(6, "hindi", 11) },
                    { number: 12, title: "स्वदेश प्रेम", pdfUrl: pdf(6, "hindi", 12) },
                    { number: 13, title: "पेड़ की बात", pdfUrl: pdf(6, "hindi", 13) }
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Mathematics",
                icon: "📐",
                chapters: [
                    { number: 1, title: "Patterns in Mathematics", pdfUrl: pdf(6, "math", 1) },
                    { number: 2, title: "Lines and Angles", pdfUrl: pdf(6, "math", 2) },
                    { number: 3, title: "Number Play", pdfUrl: pdf(6, "math", 3) },
                    { number: 4, title: "Data Handling and Presentation", pdfUrl: pdf(6, "math", 4) },
                    { number: 5, title: "Prime Time", pdfUrl: pdf(6, "math", 5) },
                    { number: 6, title: "Perimeter and Area", pdfUrl: pdf(6, "math", 6) },
                    { number: 7, title: "Fractions", pdfUrl: pdf(6, "math", 7) },
                    { number: 8, title: "Playing with Constructions", pdfUrl: pdf(6, "math", 8) },
                    { number: 9, title: "Symmetry", pdfUrl: pdf(6, "math", 9) },
                    { number: 10, title: "The Other Side of Zero", pdfUrl: pdf(6, "math", 10) },
                ]
            },
            {
                id: "science",
                name: "Science",
                book: "Curiosity",
                icon: "🔬",
                chapters: [
                    { number: 1, title: "The Wonderful World of Science", pdfUrl: pdf(6, "science", 1) },
                    { number: 2, title: "Diversity in the Living World", pdfUrl: pdf(6, "science", 2) },
                    { number: 3, title: "Mindful Eating", pdfUrl: pdf(6, "science", 3) },
                    { number: 4, title: "Exploring Magnets", pdfUrl: pdf(6, "science", 4) },
                    { number: 5, title: "Measurement of Length and Motion", pdfUrl: pdf(6, "science", 5) },
                    { number: 6, title: "Materials Around Us", pdfUrl: pdf(6, "science", 6) },
                    { number: 7, title: "Temperature and its Measurement", pdfUrl: pdf(6, "science", 7) },
                    { number: 8, title: "A Journey through States of Water", pdfUrl: pdf(6, "science", 8) },
                    { number: 9, title: "Methods of Separation in Everyday Life", pdfUrl: pdf(6, "science", 9) },
                    { number: 10, title: "Living Creatures", pdfUrl: pdf(6, "science", 10) },
                    { number: 11, title: "Nature's Treasures", pdfUrl: pdf(6, "science", 11) },
                    { number: 12, title: "Beyond Earth", pdfUrl: pdf(6, "science", 12) },
                ]
            },
            {
                id: "social_science",
                name: "Social Science",
                book: "Exploring Society",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "Locating Places on the Earth", pdfUrl: pdf(6, "social_science", 1) },
                    { number: 2, title: "Oceans and Continents", pdfUrl: pdf(6, "social_science", 2) },
                    { number: 3, title: "Landforms and Life", pdfUrl: pdf(6, "social_science", 3) },
                    { number: 4, title: "Understanding Society and Culture", pdfUrl: pdf(6, "social_science", 4) },
                    { number: 5, title: "India: A Cultural Tapestry", pdfUrl: pdf(6, "social_science", 5) },
                    { number: 6, title: "India: Our Country", pdfUrl: pdf(6, "social_science", 6) },
                    { number: 7, title: "Our Environment", pdfUrl: pdf(6, "social_science", 7) },
                    { number: 8, title: "Economic Life Around Us", pdfUrl: pdf(6, "social_science", 8) },
                    { number: 9, title: "Governing Ourselves", pdfUrl: pdf(6, "social_science", 9) },
                    { number: 10, title: "Local Government", pdfUrl: pdf(6, "social_science", 10) },
                    { number: 11, title: "India's Cultural Roots", pdfUrl: pdf(6, "social_science", 11) },
                    { number: 12, title: "New Ideas and Religions", pdfUrl: pdf(6, "social_science", 12) },
                    { number: 13, title: "Empires and their Legacies", pdfUrl: pdf(6, "social_science", 13) },
                    { number: 14, title: "India and the World", pdfUrl: pdf(6, "social_science", 14) },
                ]
            },
            {
                id: "sanskrit",
                name: "Sanskrit",
                book: "Ruchira I",
                icon: "🕉️",
                chapters: [
                    { number: 1, title: "Chapter 1", pdfUrl: pdf(6, "sanskrit", 1) },
                    { number: 2, title: "Chapter 2", pdfUrl: pdf(6, "sanskrit", 2) },
                    { number: 3, title: "Chapter 3", pdfUrl: pdf(6, "sanskrit", 3) },
                    { number: 4, title: "Chapter 4", pdfUrl: pdf(6, "sanskrit", 4) },
                    { number: 5, title: "Chapter 5", pdfUrl: pdf(6, "sanskrit", 5) },
                    { number: 6, title: "Chapter 6", pdfUrl: pdf(6, "sanskrit", 6) },
                    { number: 7, title: "Chapter 7", pdfUrl: pdf(6, "sanskrit", 7) },
                    { number: 8, title: "Chapter 8", pdfUrl: pdf(6, "sanskrit", 8) },
                    { number: 9, title: "Chapter 9", pdfUrl: pdf(6, "sanskrit", 9) },
                    { number: 10, title: "Chapter 10", pdfUrl: pdf(6, "sanskrit", 10) },
                    { number: 11, title: "Chapter 11", pdfUrl: pdf(6, "sanskrit", 11) },
                    { number: 12, title: "Chapter 12", pdfUrl: pdf(6, "sanskrit", 12) },
                    { number: 13, title: "Chapter 13", pdfUrl: pdf(6, "sanskrit", 13) },
                    { number: 14, title: "Chapter 14", pdfUrl: pdf(6, "sanskrit", 14) },
                    { number: 15, title: "Chapter 15", pdfUrl: pdf(6, "sanskrit", 15) },
                    { number: 16, title: "Chapter 16", pdfUrl: pdf(6, "sanskrit", 16) }
                ]
            }
        ]
    },
    {
        id: 7,
        name: "Class 7",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Poorvi",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Learning Together", pdfUrl: pdf(7, "english", 1) },
                    { number: 2, title: "Wit and Humour", pdfUrl: pdf(7, "english", 2) },
                    { number: 3, title: "Dreams and Discoveries", pdfUrl: pdf(7, "english", 3) },
                    { number: 4, title: "Travel and Adventure", pdfUrl: pdf(7, "english", 4) },
                    { number: 5, title: "Bravehearts", pdfUrl: pdf(7, "english", 5) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Malhar",
                icon: "हिं",
                chapters: [
                    { number: 1, title: "माँ, कह एक कहानी", pdfUrl: pdf(7, "hindi", 1) },
                    { number: 2, title: "तीन बुद्धिमान", pdfUrl: pdf(7, "hindi", 2) },
                    { number: 3, title: "फूल और काँटा", pdfUrl: pdf(7, "hindi", 3) },
                    { number: 4, title: "पानी रे पानी", pdfUrl: pdf(7, "hindi", 4) },
                    { number: 5, title: "नहीं होना बीमार", pdfUrl: pdf(7, "hindi", 5) },
                    { number: 6, title: "गिरिधर कविराय की कुंडलिया", pdfUrl: pdf(7, "hindi", 6) },
                    { number: 7, title: "वर्षा-बहार", pdfUrl: pdf(7, "hindi", 7) },
                    { number: 8, title: "बिरजू महाराज से साक्षात्कार", pdfUrl: pdf(7, "hindi", 8) },
                    { number: 9, title: "चिड़िया", pdfUrl: pdf(7, "hindi", 9) },
                    { number: 10, title: "मीरा के पद", pdfUrl: pdf(7, "hindi", 10) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Mathematics",
                icon: "📐",
                chapters: [
                    { number: 1, title: "Large Numbers Around Us", pdfUrl: pdf(7, "math", 1) },
                    { number: 2, title: "Arithmetic Expressions", pdfUrl: pdf(7, "math", 2) },
                    { number: 3, title: "A Peek Beyond the Point", pdfUrl: pdf(7, "math", 3) },
                    { number: 4, title: "Using Letter-Numbers", pdfUrl: pdf(7, "math", 4) },
                    { number: 5, title: "Parallel and Intersecting Lines", pdfUrl: pdf(7, "math", 5) },
                    { number: 6, title: "Number Play", pdfUrl: pdf(7, "math", 6) },
                    { number: 7, title: "A Tale of Three Intersecting Lines", pdfUrl: pdf(7, "math", 7) },
                    { number: 8, title: "Working with Fractions", pdfUrl: pdf(7, "math", 8) },
                    { number: 9, title: "Geometric Twins", pdfUrl: pdf(7, "math", 9) },
                    { number: 10, title: "Operations with Integers", pdfUrl: pdf(7, "math", 10) },
                    { number: 11, title: "Finding Common Ground", pdfUrl: pdf(7, "math", 11) },
                    { number: 12, title: "Another Peek Beyond the Point", pdfUrl: pdf(7, "math", 12) },
                    { number: 13, title: "Connecting the Dots...", pdfUrl: pdf(7, "math", 13) },
                    { number: 14, title: "Constructions and Tilings", pdfUrl: pdf(7, "math", 14) },
                    { number: 15, title: "Finding the Unknown", pdfUrl: pdf(7, "math", 15) },
                ]
            },
            {
                id: "science",
                name: "Science",
                book: "Curiosity",
                icon: "🔬",
                chapters: [
                    { number: 1, title: "The Ever-Evolving World of Science", pdfUrl: pdf(7, "science", 1) },
                    { number: 2, title: "Exploring Substances: Acidic, Basic, and Neutral", pdfUrl: pdf(7, "science", 2) },
                    { number: 3, title: "Electricity: Circuits and their Components", pdfUrl: pdf(7, "science", 3) },
                    { number: 4, title: "The World of Metals and Non-metals", pdfUrl: pdf(7, "science", 4) },
                    { number: 5, title: "Changes Around Us: Physical and Chemical", pdfUrl: pdf(7, "science", 5) },
                    { number: 6, title: "Adolescence: A Stage of Growth and Change", pdfUrl: pdf(7, "science", 6) },
                    { number: 7, title: "Heat Transfer in Nature", pdfUrl: pdf(7, "science", 7) },
                    { number: 8, title: "Measurement of Time and Motion", pdfUrl: pdf(7, "science", 8) },
                    { number: 9, title: "Life Processes in Animals", pdfUrl: pdf(7, "science", 9) },
                    { number: 10, title: "Life Processes in Plants", pdfUrl: pdf(7, "science", 10) },
                    { number: 11, title: "Light: Shadows and Reflections", pdfUrl: pdf(7, "science", 11) },
                    { number: 12, title: "Earth, Moon, and the Sun", pdfUrl: pdf(7, "science", 12) },
                ]
            },
            {
                id: "social-science",
                name: "Social Science",
                book: "Exploring Society",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "Geographical Diversity of India", pdfUrl: pdf(7, "social-science", 1) },
                    { number: 2, title: "Understanding the Weather", pdfUrl: pdf(7, "social-science", 2) },
                    { number: 3, title: "Climates of India", pdfUrl: pdf(7, "social-science", 3) },
                    { number: 4, title: "New Beginnings: Cities and States", pdfUrl: pdf(7, "social-science", 4) },
                    { number: 5, title: "The Rise of Empires", pdfUrl: pdf(7, "social-science", 5) },
                    { number: 6, title: "The Age of Reorganisation", pdfUrl: pdf(7, "social-science", 6) },
                    { number: 7, title: "The Gupta Era: An Age of Tireless Creativity", pdfUrl: pdf(7, "social-science", 7) },
                    { number: 8, title: "How the Land Becomes Sacred", pdfUrl: pdf(7, "social-science", 8) },
                    { number: 9, title: "From the Rulers to the Ruled: Types of Governments", pdfUrl: pdf(7, "social-science", 9) },
                    { number: 10, title: "The Constitution of India — An Introduction", pdfUrl: pdf(7, "social-science", 10) },
                    { number: 11, title: "From Barter to Money", pdfUrl: pdf(7, "social-science", 11) },
                    { number: 12, title: "Understanding Markets", pdfUrl: pdf(7, "social-science", 12) },
                    { number: 13, title: "The Story of Indian Farming", pdfUrl: pdf(7, "social-science", 13) },
                    { number: 14, title: "India and Her Neighbours", pdfUrl: pdf(7, "social-science", 14) },
                    { number: 15, title: "Empires and Kingdoms: 6th to 10th Centuries", pdfUrl: pdf(7, "social-science", 15) },
                    { number: 16, title: "Turning Tides: 11th and 12th Centuries", pdfUrl: pdf(7, "social-science", 16) },
                    { number: 17, title: "India, a Home to Many", pdfUrl: pdf(7, "social-science", 17) },
                    { number: 18, title: "The State, the Government, and You", pdfUrl: pdf(7, "social-science", 18) },
                    { number: 19, title: "Infrastructure: Engine of India's Development", pdfUrl: pdf(7, "social-science", 19) },
                    { number: 20, title: "Banks and the Magic of Finance", pdfUrl: pdf(7, "social-science", 20) },
                ]
            },
            {
                id: "sanskrit",
                name: "Sanskrit",
                book: "दीपकम",
                icon: "🕉️",
                chapters: [
                    { number: 1, title: "Chapter 1", pdfUrl: pdf(7, "sanskrit", 1) },
                    { number: 2, title: "Chapter 2", pdfUrl: pdf(7, "sanskrit", 2) },
                    { number: 3, title: "Chapter 3", pdfUrl: pdf(7, "sanskrit", 3) },
                    { number: 4, title: "Chapter 4", pdfUrl: pdf(7, "sanskrit", 4) },
                    { number: 5, title: "Chapter 5", pdfUrl: pdf(7, "sanskrit", 5) },
                    { number: 6, title: "Chapter 6", pdfUrl: pdf(7, "sanskrit", 6) },
                    { number: 7, title: "Chapter 7", pdfUrl: pdf(7, "sanskrit", 7) },
                    { number: 8, title: "Chapter 8", pdfUrl: pdf(7, "sanskrit", 8) },
                    { number: 9, title: "Chapter 9", pdfUrl: pdf(7, "sanskrit", 9) },
                    { number: 10, title: "Chapter 10", pdfUrl: pdf(7, "sanskrit", 10) },
                    { number: 11, title: "Chapter 11", pdfUrl: pdf(7, "sanskrit", 11) },
                    { number: 12, title: "Chapter 12", pdfUrl: pdf(7, "sanskrit", 12) },
                    { number: 13, title: "Chapter 13", pdfUrl: pdf(7, "sanskrit", 13) },
                    { number: 14, title: "Chapter 14", pdfUrl: pdf(7, "sanskrit", 14) },
                    { number: 15, title: "Chapter 15", pdfUrl: pdf(7, "sanskrit", 15) }
                ]
            }
        ]
    },
    {
        id: 8,
        name: "Class 8",
        subjects: [
            {
                id: "english",
                name: "English",
                book: "Poorvi",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Wit and Wisdom", pdfUrl: pdf(8, "english", 1) },
                    { number: 2, title: "Values and Dispositions", pdfUrl: pdf(8, "english", 2) },
                    { number: 3, title: "Mystery and Magic", pdfUrl: pdf(8, "english", 3) },
                    { number: 4, title: "Environment", pdfUrl: pdf(8, "english", 4) },
                    { number: 5, title: "Science and Curiosity", pdfUrl: pdf(8, "english", 5) },
                ]
            },
            {
                id: "hindi",
                name: "Hindi",
                book: "Malhar",
                icon: "हिं",
                chapters: [
                    { number: 1, title: "स्वदेश", pdfUrl: pdf(8, "hindi", 1) },
                    { number: 2, title: "दो गौरैया", pdfUrl: pdf(8, "hindi", 2) },
                    { number: 3, title: "एक आशीर्वाद", pdfUrl: pdf(8, "hindi", 3) },
                    { number: 4, title: "हरिद्वार", pdfUrl: pdf(8, "hindi", 4) },
                    { number: 5, title: "कबीर के दोहे", pdfUrl: pdf(8, "hindi", 5) },
                    { number: 6, title: "एक टोकरी भर मिट्टी", pdfUrl: pdf(8, "hindi", 6) },
                    { number: 7, title: "मत बाँधो इन सपनों के पंख", pdfUrl: pdf(8, "hindi", 7) },
                    { number: 8, title: "नए मेहमान", pdfUrl: pdf(8, "hindi", 8) },
                    { number: 9, title: "आदमी का अनुपात", pdfUrl: pdf(8, "hindi", 9) },
                    { number: 10, title: "तरुण के स्वप्न", pdfUrl: pdf(8, "hindi", 10) },
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Mathematics",
                icon: "📐",
                chapters: [
                    { number: 1, title: "A Square and a Cube", pdfUrl: pdf(8, "math", 1) },
                    { number: 2, title: "Power Play", pdfUrl: pdf(8, "math", 2) },
                    { number: 3, title: "A Story of Numbers", pdfUrl: pdf(8, "math", 3) },
                    { number: 4, title: "Quadrilaterals", pdfUrl: pdf(8, "math", 4) },
                    { number: 5, title: "Number Play", pdfUrl: pdf(8, "math", 5) },
                    { number: 6, title: "We Distribute, Yet Things Multiply", pdfUrl: pdf(8, "math", 6) },
                    { number: 7, title: "Proportional Reasoning-1", pdfUrl: pdf(8, "math", 7) },
                    { number: 8, title: "Fractions in Disguise", pdfUrl: pdf(8, "math", 8) },
                    { number: 9, title: "The Baudhayana-Pythagoras Theorem", pdfUrl: pdf(8, "math", 9) },
                    { number: 10, title: "Proportional Reasoning-2", pdfUrl: pdf(8, "math", 10) },
                    { number: 11, title: "Exploring Some Geometric Themes", pdfUrl: pdf(8, "math", 11) },
                    { number: 12, title: "Tales by Dots and Lines", pdfUrl: pdf(8, "math", 12) },
                    { number: 13, title: "Algebra Play", pdfUrl: pdf(8, "math", 13) },
                    { number: 14, title: "Area", pdfUrl: pdf(8, "math", 14) },
                ]
            },
            {
                id: "science",
                name: "Science",
                book: "Curiosity",
                icon: "🔬",
                chapters: [
                    { number: 1, title: "Exploring the Investigative World of Science", pdfUrl: pdf(8, "science", 1) },
                    { number: 2, title: "The Invisible Living World: Beyond Our Naked Eye", pdfUrl: pdf(8, "science", 2) },
                    { number: 3, title: "Health: The Ultimate Treasure", pdfUrl: pdf(8, "science", 3) },
                    { number: 4, title: "Electricity: Magnetic and Heating Effects", pdfUrl: pdf(8, "science", 4) },
                    { number: 5, title: "Exploring Forces", pdfUrl: pdf(8, "science", 5) },
                    { number: 6, title: "Pressure, Winds, Storms, and Cyclones", pdfUrl: pdf(8, "science", 6) },
                    { number: 7, title: "Particulate Nature of Matter", pdfUrl: pdf(8, "science", 7) },
                    { number: 8, title: "Nature of Matter: Elements, Compounds, and Mixtures", pdfUrl: pdf(8, "science", 8) },
                    { number: 9, title: "The Amazing World of Solutes, Solvents, and Solutions", pdfUrl: pdf(8, "science", 9) },
                    { number: 10, title: "Light: Mirrors and Lenses", pdfUrl: pdf(8, "science", 10) },
                    { number: 11, title: "Keeping Time with the Skies", pdfUrl: pdf(8, "science", 11) },
                    { number: 12, title: "How Nature Works in Harmony", pdfUrl: pdf(8, "science", 12) },
                    { number: 13, title: "Our Home: Earth, a Unique Life Sustaining Planet", pdfUrl: pdf(8, "science", 13) },
                ]
            },
            {
                id: "social-science",
                name: "Social Science",
                book: "Exploring Society: India and Beyond",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "Natural Resources and Their Use", pdfUrl: pdf(8, "social-science", 1) },
                    { number: 2, title: "Reshaping India's Political Map", pdfUrl: pdf(8, "social-science", 2) },
                    { number: 3, title: "The Rise of the Marathas", pdfUrl: pdf(8, "social-science", 3) },
                    { number: 4, title: "The Colonial Era in India", pdfUrl: pdf(8, "social-science", 4) },
                    { number: 5, title: "Universal Franchise and India's Electoral System", pdfUrl: pdf(8, "social-science", 5) },
                    { number: 6, title: "The Parliamentary System: Legislature and Executive", pdfUrl: pdf(8, "social-science", 6) },
                    { number: 7, title: "Factors of Production", pdfUrl: pdf(8, "social-science", 7) },
                ]
            },
            {
                id: "sanskrit",
                name: "Sanskrit",
                book: "Ruchira III",
                icon: "🕉️",
                chapters: [
                    { number: 1, title: "Chapter 1", pdfUrl: pdf(8, "sanskrit", 1) },
                    { number: 2, title: "Chapter 2", pdfUrl: pdf(8, "sanskrit", 2) },
                    { number: 3, title: "Chapter 3", pdfUrl: pdf(8, "sanskrit", 3) },
                    { number: 4, title: "Chapter 4", pdfUrl: pdf(8, "sanskrit", 4) },
                    { number: 5, title: "Chapter 5", pdfUrl: pdf(8, "sanskrit", 5) },
                    { number: 6, title: "Chapter 6", pdfUrl: pdf(8, "sanskrit", 6) },
                    { number: 7, title: "Chapter 7", pdfUrl: pdf(8, "sanskrit", 7) },
                    { number: 8, title: "Chapter 8", pdfUrl: pdf(8, "sanskrit", 8) },
                    { number: 9, title: "Chapter 9", pdfUrl: pdf(8, "sanskrit", 9) },
                    { number: 10, title: "Chapter 10", pdfUrl: pdf(8, "sanskrit", 10) },
                    { number: 11, title: "Chapter 11", pdfUrl: pdf(8, "sanskrit", 11) },
                    { number: 12, title: "Chapter 12", pdfUrl: pdf(8, "sanskrit", 12) },
                    { number: 13, title: "Chapter 13", pdfUrl: pdf(8, "sanskrit", 13) },
                    { number: 14, title: "Chapter 14", pdfUrl: pdf(8, "sanskrit", 14) },
                    { number: 15, title: "Chapter 15", pdfUrl: pdf(8, "sanskrit", 15) },
                    { number: 16, title: "Chapter 16", pdfUrl: pdf(8, "sanskrit", 16) }
                ]
            }
        ]
    },
    {
        id: 9,
        name: "Class 9",
        subjects: [
            {
                id: "math",
                name: "Mathematics",
                book: "Mathematics",
                icon: "📐",
                chapters: [
                    { number: 1, title: "Orienting Yourself: The Use of Coordinates", pdfUrl: pdf(9, "math", 1) },
                    { number: 2, title: "Introduction to Linear Polynomials", pdfUrl: pdf(9, "math", 2) },
                    { number: 3, title: "The World of Numbers", pdfUrl: pdf(9, "math", 3) },
                    { number: 4, title: "Exploring Algebraic Identities", pdfUrl: pdf(9, "math", 4) },
                    { number: 5, title: "I'm Up and Down, and Round and Round", pdfUrl: pdf(9, "math", 5) },
                    { number: 6, title: "Measuring Space: Perimeter and Area", pdfUrl: pdf(9, "math", 6) },
                    { number: 7, title: "The Mathematics of Maybe: Introduction to Probability", pdfUrl: pdf(9, "math", 7) },
                    { number: 8, title: "Predicting What Comes Next: Exploring Sequences and Progressions", pdfUrl: pdf(9, "math", 8) },
                ]
            },
            {
                id: "science",
                name: "Science",
                book: "Science",
                icon: "🔬",
                chapters: [
                    { number: 1, title: "Exploration: Entering the World of Secondary Science", pdfUrl: pdf(9, "science", 1) },
                    { number: 2, title: "Cell: The Building Block of Life", pdfUrl: pdf(9, "science", 2) },
                    { number: 3, title: "Tissues in Action", pdfUrl: pdf(9, "science", 3) },
                    { number: 4, title: "Describing Motion Around Us", pdfUrl: pdf(9, "science", 4) },
                    { number: 5, title: "Exploring Mixtures and their Separation", pdfUrl: pdf(9, "science", 5) },
                    { number: 6, title: "How Forces Affect Motion", pdfUrl: pdf(9, "science", 6) },
                    { number: 7, title: "Work, Energy, and Simple Machines", pdfUrl: pdf(9, "science", 7) },
                    { number: 8, title: "Journey Inside the Atom", pdfUrl: pdf(9, "science", 8) },
                    { number: 9, title: "Atomic Foundations of Matter", pdfUrl: pdf(9, "science", 9) },
                    { number: 10, title: "Sound Waves: Characteristics and Applications", pdfUrl: pdf(9, "science", 10) },
                    { number: 11, title: "Reproduction: How Life Continues", pdfUrl: pdf(9, "science", 11) },
                    { number: 12, title: "Patterns in Life: Diversity and Classification", pdfUrl: pdf(9, "science", 12) },
                    { number: 13, title: "Earth as a System: Energy, Matter, and Life", pdfUrl: pdf(9, "science", 13) },
                ]
            },
            {
                id: "pe",
                name: "Physical Education",
                book: "Health and Physical Education",
                icon: "🏃",
                chapters: [
                    { number: 1, title: "Evolution of Physical Education and Well-being", pdfUrl: pdf(9, "pe", 1) },
                    { number: 2, title: "Science and Sports", pdfUrl: pdf(9, "pe", 2) },
                    { number: 3, title: "Olympism", pdfUrl: pdf(9, "pe", 3) },
                    { number: 4, title: "Sports for All", pdfUrl: pdf(9, "pe", 4) },
                    { number: 5, title: "Sports", pdfUrl: pdf(9, "pe", 5) },
                    { number: 6, title: "Yoga for Holistic Health and Personal Excellence", pdfUrl: pdf(9, "pe", 6) },
                ]
            },
            {
                id: "english-kaveri",
                  name: "English",
                  book: "Kaveri",
                  icon: "📖",
                  chapters: [
                      { number: 1, title: "How I Taught My Grandmother to Read & Bharat Our Land", pdfUrl: "/pdfs/class-9/english-kaveri/kaveri/chapter-1.pdf" },
                      { number: 2, title: "The Pot Maker & Gifts of Grace: Honouring Our Vocations", pdfUrl: "/pdfs/class-9/english-kaveri/kaveri/chapter-2.pdf" },
                      { number: 3, title: "Winds of Change & Canvas of Soil", pdfUrl: "/pdfs/class-9/english-kaveri/kaveri/chapter-3.pdf" },
                      { number: 4, title: "Vitamin-M & I Cannot Remember My Mother", pdfUrl: "/pdfs/class-9/english-kaveri/kaveri/chapter-4.pdf" },
                      { number: 5, title: "The World of Limitless Possibilities & Nine Gold Medals", pdfUrl: "/pdfs/class-9/english-kaveri/kaveri/chapter-5.pdf" },
                      { number: 6, title: "Twin Melodies & A Friend Found in Music", pdfUrl: "/pdfs/class-9/english-kaveri/kaveri/chapter-6.pdf" },
                      { number: 7, title: "Carrier of Words & Words", pdfUrl: "/pdfs/class-9/english-kaveri/kaveri/chapter-7.pdf" },
                      { number: 8, title: "Follow That Dream & Believe in Yourself", pdfUrl: "/pdfs/class-9/english-kaveri/kaveri/chapter-8.pdf" },
                      { number: 9, title: "Appendix", pdfUrl: "/pdfs/class-9/english-kaveri/kaveri/chapter-11.pdf" },
                  ]
              },
            {
                id: "hindi-ganga",
                name: "Hindi",
                book: "Ganga",
                icon: "हिं",
                chapters: [
                    { number: 1, title: "Chp-1", pdfUrl: "/pdfs/class-9/hindi-ganga/ganga/chapter-1.pdf" },
                    { number: 2, title: "Chp-2", pdfUrl: "/pdfs/class-9/hindi-ganga/ganga/chapter-2.pdf" },
                    { number: 3, title: "Chp-3", pdfUrl: "/pdfs/class-9/hindi-ganga/ganga/chapter-3.pdf" },
                    { number: 4, title: "Chp-4", pdfUrl: "/pdfs/class-9/hindi-ganga/ganga/chapter-4.pdf" },
                    { number: 5, title: "Chp-5", pdfUrl: "/pdfs/class-9/hindi-ganga/ganga/chapter-5.pdf" },
                    { number: 6, title: "Chp-6", pdfUrl: "/pdfs/class-9/hindi-ganga/ganga/chapter-6.pdf" },
                    { number: 7, title: "Chp-7", pdfUrl: "/pdfs/class-9/hindi-ganga/ganga/chapter-7.pdf" },
                    { number: 8, title: "Chp-8", pdfUrl: "/pdfs/class-9/hindi-ganga/ganga/chapter-8.pdf" },
                    { number: 9, title: "Chp-9", pdfUrl: "/pdfs/class-9/hindi-ganga/ganga/chapter-9.pdf" },
                    { number: 10, title: "Chp-10", pdfUrl: "/pdfs/class-9/hindi-ganga/ganga/chapter-10.pdf" },
                    { number: 11, title: "Chp-11", pdfUrl: "/pdfs/class-9/hindi-ganga/ganga/chapter-11.pdf" },
                    { number: 12, title: "Chp-12", pdfUrl: "/pdfs/class-9/hindi-ganga/ganga/chapter-12.pdf" },
                ]
            },
            {
                id: "hindi-reva",
                name: "Hindi",
                book: "Reva",
                icon: "हिं",
                chapters: [
                    { number: 1, title: "Chp-1", pdfUrl: "/pdfs/class-9/hindi-reva/reva/chapter-1.pdf" },
                    { number: 2, title: "Chp-2", pdfUrl: "/pdfs/class-9/hindi-reva/reva/chapter-2.pdf" },
                    { number: 3, title: "Chp-3", pdfUrl: "/pdfs/class-9/hindi-reva/reva/chapter-3.pdf" },
                    { number: 4, title: "Chp-4", pdfUrl: "/pdfs/class-9/hindi-reva/reva/chapter-4.pdf" },
                    { number: 5, title: "Chp-5", pdfUrl: "/pdfs/class-9/hindi-reva/reva/chapter-5.pdf" },
                    { number: 6, title: "Chp-6", pdfUrl: "/pdfs/class-9/hindi-reva/reva/chapter-6.pdf" },
                    { number: 7, title: "Chp-7", pdfUrl: "/pdfs/class-9/hindi-reva/reva/chapter-7.pdf" },
                    { number: 8, title: "Chp-8", pdfUrl: "/pdfs/class-9/hindi-reva/reva/chapter-8.pdf" },
                    { number: 9, title: "Chp-9", pdfUrl: "/pdfs/class-9/hindi-reva/reva/chapter-9.pdf" },
                    { number: 10, title: "Chp-10", pdfUrl: "/pdfs/class-9/hindi-reva/reva/chapter-10.pdf" },
                ]
            },
            {
                id: "sanskrit",
                name: "Sanskrit",
                book: "Sharada",
                icon: "📜",
                chapters: [
                    { number: 1, title: "Chp-1", pdfUrl: pdf(9, "sanskrit", 1) },
                    { number: 2, title: "Chp-2", pdfUrl: pdf(9, "sanskrit", 2) },
                    { number: 3, title: "Chp-3", pdfUrl: pdf(9, "sanskrit", 3) },
                    { number: 4, title: "Chp-4", pdfUrl: pdf(9, "sanskrit", 4) },
                    { number: 5, title: "Chp-5", pdfUrl: pdf(9, "sanskrit", 5) },
                    { number: 6, title: "Chp-6", pdfUrl: pdf(9, "sanskrit", 6) },
                    { number: 7, title: "Chp-7", pdfUrl: pdf(9, "sanskrit", 7) },
                    { number: 8, title: "Chp-8", pdfUrl: pdf(9, "sanskrit", 8) },
                    { number: 9, title: "Chp-9", pdfUrl: pdf(9, "sanskrit", 9) },
                    { number: 10, title: "Chp-10", pdfUrl: pdf(9, "sanskrit", 10) },
                    { number: 11, title: "Chp-11", pdfUrl: pdf(9, "sanskrit", 11) },
                    { number: 12, title: "Chp-12", pdfUrl: pdf(9, "sanskrit", 12) },
                    { number: 13, title: "Chp-13", pdfUrl: pdf(9, "sanskrit", 13) },
                    { number: 14, title: "Chp-14", pdfUrl: pdf(9, "sanskrit", 14) },
                    { number: 15, title: "Chp-15", pdfUrl: pdf(9, "sanskrit", 15) },
                    { number: 16, title: "Chp-16", pdfUrl: pdf(9, "sanskrit", 16) },
                ]
            },
            {
                id: "history",
                name: "History",
                book: "India and the Contemporary World I",
                icon: "🏛️",
                chapters: [
                    { number: 1, title: "The French Revolution", pdfUrl: pdf(9, "history", 1) },
                    { number: 2, title: "Socialism in Europe and the Russian Revolution", pdfUrl: pdf(9, "history", 2) },
                    { number: 3, title: "Nazism and the Rise of Hitler", pdfUrl: pdf(9, "history", 3) },
                    { number: 4, title: "Forest Society and Colonialism", pdfUrl: pdf(9, "history", 4) },
                    { number: 5, title: "Pastoralists in the Modern World", pdfUrl: pdf(9, "history", 5) },
                ]
            },
            {
                id: "civics",
                name: "Political Science",
                book: "Democratic Politics I",
                icon: "⚖️",
                chapters: [
                    { number: 1, title: "What is Democracy? Why Democracy?", pdfUrl: pdf(9, "civics", 1) },
                    { number: 2, title: "Constitutional Design", pdfUrl: pdf(9, "civics", 2) },
                    { number: 3, title: "Electoral Politics", pdfUrl: pdf(9, "civics", 3) },
                    { number: 4, title: "Working of Institutions", pdfUrl: pdf(9, "civics", 4) },
                    { number: 5, title: "Democratic Rights", pdfUrl: pdf(9, "civics", 5) },
                ]
            },
            {
                id: "geography",
                name: "Geography",
                book: "Contemporary India I",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "India – Size and Location", pdfUrl: pdf(9, "geography", 1) },
                    { number: 2, title: "Physical Features of India", pdfUrl: pdf(9, "geography", 2) },
                    { number: 3, title: "Drainage", pdfUrl: pdf(9, "geography", 3) },
                    { number: 4, title: "Climate", pdfUrl: pdf(9, "geography", 4) },
                    { number: 5, title: "Natural Vegetation and Wildlife", pdfUrl: pdf(9, "geography", 5) },
                    { number: 6, title: "Population", pdfUrl: pdf(9, "geography", 6) },
                ]
            },
            {
                id: "economics",
                name: "Economics",
                book: "Economics",
                icon: "💰",
                chapters: [
                    { number: 1, title: "The Story of Village Palampur", pdfUrl: pdf(9, "economics", 1) },
                    { number: 2, title: "People as Resource", pdfUrl: pdf(9, "economics", 2) },
                    { number: 3, title: "Poverty as a Challenge", pdfUrl: pdf(9, "economics", 3) },
                    { number: 4, title: "Food Security in India", pdfUrl: pdf(9, "economics", 4) },
                ]
            },
        ]
    },
    {
        id: 10,
        name: "Class 10",
        subjects: [
            {
                id: "math",
                name: "Mathematics",
                book: "Mathematics",
                icon: "📐",
                chapters: [
                    { number: 1, title: "Real Numbers", pdfUrl: pdf(10, "math", 1) },
                    { number: 2, title: "Polynomials", pdfUrl: pdf(10, "math", 2) },
                    { number: 3, title: "Pair of Linear Equations in Two Variables", pdfUrl: pdf(10, "math", 3) },
                    { number: 4, title: "Quadratic Equations", pdfUrl: pdf(10, "math", 4) },
                    { number: 5, title: "Arithmetic Progressions", pdfUrl: pdf(10, "math", 5) },
                    { number: 6, title: "Triangles", pdfUrl: pdf(10, "math", 6) },
                    { number: 7, title: "Coordinate Geometry", pdfUrl: pdf(10, "math", 7) },
                    { number: 8, title: "Introduction to Trigonometry", pdfUrl: pdf(10, "math", 8) },
                    { number: 9, title: "Some Applications of Trigonometry", pdfUrl: pdf(10, "math", 9) },
                    { number: 10, title: "Circles", pdfUrl: pdf(10, "math", 10) },
                    { number: 11, title: "Areas Related to Circles", pdfUrl: pdf(10, "math", 11) },
                    { number: 12, title: "Surface Areas and Volumes", pdfUrl: pdf(10, "math", 12) },
                    { number: 13, title: "Statistics", pdfUrl: pdf(10, "math", 13) },
                    { number: 14, title: "Probability", pdfUrl: pdf(10, "math", 14) },
                ]
            },
            {
                id: "science",
                name: "Science",
                book: "Science",
                icon: "🔬",
                chapters: [
                    { number: 1, title: "Chemical Reactions and Equations", pdfUrl: pdf(10, "science", 1) },
                    { number: 2, title: "Acids, Bases and Salts", pdfUrl: pdf(10, "science", 2) },
                    { number: 3, title: "Metals and Non-metals", pdfUrl: pdf(10, "science", 3) },
                    { number: 4, title: "Carbon and its Compounds", pdfUrl: pdf(10, "science", 4) },
                    { number: 5, title: "Life Processes", pdfUrl: pdf(10, "science", 5) },
                    { number: 6, title: "Control and Coordination", pdfUrl: pdf(10, "science", 6) },
                    { number: 7, title: "How do Organisms Reproduce", pdfUrl: pdf(10, "science", 7) },
                    { number: 8, title: "Heredity", pdfUrl: pdf(10, "science", 8) },
                    { number: 9, title: "Light – Reflection and Refraction", pdfUrl: pdf(10, "science", 9) },
                    { number: 10, title: "The Human Eye and the Colourful World", pdfUrl: pdf(10, "science", 10) },
                    { number: 11, title: "Electricity", pdfUrl: pdf(10, "science", 11) },
                    { number: 12, title: "Magnetic Effects of Electric Current", pdfUrl: pdf(10, "science", 12) },
                    { number: 13, title: "Our Environment", pdfUrl: pdf(10, "science", 13) },
                ]
            },
            {
                id: "english",
                name: "English",
                book: "First Flight",
                icon: "📖",
                chapters: [
                    { number: 1, title: "A Letter to God", pdfUrl: pdf(10, "english", 1) },
                    { number: 2, title: "Nelson Mandela: Long Walk to Freedom", pdfUrl: pdf(10, "english", 2) },
                    { number: 3, title: "Two Stories about Flying", pdfUrl: pdf(10, "english", 3) },
                    { number: 4, title: "From the Diary of Anne Frank", pdfUrl: pdf(10, "english", 4) },
                    { number: 5, title: "Glimpses of India", pdfUrl: pdf(10, "english", 5) },
                    { number: 6, title: "Mijbil the Otter", pdfUrl: pdf(10, "english", 6) },
                    { number: 7, title: "Madam Rides the Bus", pdfUrl: pdf(10, "english", 7) },
                    { number: 8, title: "The Sermon at Benares", pdfUrl: pdf(10, "english", 8) },
                    { number: 9, title: "The Proposal", pdfUrl: pdf(10, "english", 9) },
                ]
            },
            {
                id: "english-supplementary",
                name: "English - Supplementary",
                book: "Footprints without Feet",
                icon: "📖",
                chapters: [
                    { number: 1, title: "A Triumph of Surgery", pdfUrl: pdf(10, "english-supplementary", 1) },
                    { number: 2, title: "The Thief's Story", pdfUrl: pdf(10, "english-supplementary", 2) },
                    { number: 3, title: "The Midnight Visitor", pdfUrl: pdf(10, "english-supplementary", 3) },
                    { number: 4, title: "A Question of Trust", pdfUrl: pdf(10, "english-supplementary", 4) },
                    { number: 5, title: "Footprints without Feet", pdfUrl: pdf(10, "english-supplementary", 5) },
                    { number: 6, title: "The Making of a Scientist", pdfUrl: pdf(10, "english-supplementary", 6) },
                    { number: 7, title: "The Necklace", pdfUrl: pdf(10, "english-supplementary", 7) },
                    { number: 8, title: "Bholi", pdfUrl: pdf(10, "english-supplementary", 8) },
                    { number: 9, title: "The Book That Saved the Earth", pdfUrl: pdf(10, "english-supplementary", 9) },
                ]
            },
            {
                id: "hindi-kritika",
                name: "Hindi",
                book: "Kritika",
                icon: "हिं",
                chapters: [
                    { number: 1, title: "Chp-1", pdfUrl: pdf(10, "hindi-kritika", 1) },
                    { number: 2, title: "Chp-2", pdfUrl: pdf(10, "hindi-kritika", 2) },
                    { number: 3, title: "Chp-3", pdfUrl: pdf(10, "hindi-kritika", 3) },
                ]
            },
            {
                id: "hindi-sanchayan",
                name: "Hindi",
                book: "Sanchayan",
                icon: "हिं",
                chapters: [
                    { number: 1, title: "Chp-1", pdfUrl: pdf(10, "hindi-sanchayan", 1) },
                    { number: 2, title: "Chp-2", pdfUrl: pdf(10, "hindi-sanchayan", 2) },
                    { number: 3, title: "Chp-3", pdfUrl: pdf(10, "hindi-sanchayan", 3) },
                ]
            },
            {
                id: "hindi-kshitij",
                name: "Hindi",
                book: "Kshitij",
                icon: "हिं",
                chapters: [
                    { number: 1, title: "Chp-1", pdfUrl: pdf(10, "hindi-kshitij", 1) },
                    { number: 2, title: "Chp-2", pdfUrl: pdf(10, "hindi-kshitij", 2) },
                    { number: 3, title: "Chp-3", pdfUrl: pdf(10, "hindi-kshitij", 3) },
                    { number: 4, title: "Chp-4", pdfUrl: pdf(10, "hindi-kshitij", 4) },
                    { number: 5, title: "Chp-5", pdfUrl: pdf(10, "hindi-kshitij", 5) },
                    { number: 6, title: "Chp-6", pdfUrl: pdf(10, "hindi-kshitij", 6) },
                    { number: 7, title: "Chp-7", pdfUrl: pdf(10, "hindi-kshitij", 7) },
                    { number: 8, title: "Chp-8", pdfUrl: pdf(10, "hindi-kshitij", 8) },
                    { number: 9, title: "Chp-9", pdfUrl: pdf(10, "hindi-kshitij", 9) },
                    { number: 10, title: "Chp-10", pdfUrl: pdf(10, "hindi-kshitij", 10) },
                    { number: 11, title: "Chp-11", pdfUrl: pdf(10, "hindi-kshitij", 11) },
                    { number: 12, title: "Chp-12", pdfUrl: pdf(10, "hindi-kshitij", 12) },
                ]
            },
            {
                id: "hindi-sparsh",
                name: "Hindi",
                book: "Sparsh",
                icon: "हिं",
                chapters: [
                    { number: 1, title: "Chp-1", pdfUrl: pdf(10, "hindi-sparsh", 1) },
                    { number: 2, title: "Chp-2", pdfUrl: pdf(10, "hindi-sparsh", 2) },
                    { number: 3, title: "Chp-3", pdfUrl: pdf(10, "hindi-sparsh", 3) },
                    { number: 4, title: "Chp-4", pdfUrl: pdf(10, "hindi-sparsh", 4) },
                    { number: 5, title: "Chp-5", pdfUrl: pdf(10, "hindi-sparsh", 5) },
                    { number: 6, title: "Chp-6", pdfUrl: pdf(10, "hindi-sparsh", 6) },
                    { number: 7, title: "Chp-7", pdfUrl: pdf(10, "hindi-sparsh", 7) },
                    { number: 8, title: "Chp-8", pdfUrl: pdf(10, "hindi-sparsh", 8) },
                    { number: 9, title: "Chp-9", pdfUrl: pdf(10, "hindi-sparsh", 9) },
                    { number: 10, title: "Chp-10", pdfUrl: pdf(10, "hindi-sparsh", 10) },
                    { number: 11, title: "Chp-11", pdfUrl: pdf(10, "hindi-sparsh", 11) },
                    { number: 12, title: "Chp-12", pdfUrl: pdf(10, "hindi-sparsh", 12) },
                    { number: 13, title: "Chp-13", pdfUrl: pdf(10, "hindi-sparsh", 13) },
                    { number: 14, title: "Chp-14", pdfUrl: pdf(10, "hindi-sparsh", 14) },
                ]
            },
            {
                id: "sanskrit",
                name: "Sanskrit",
                book: "Shemushi",
                icon: "📜",
                chapters: [
                    { number: 1, title: "Chp-1", pdfUrl: pdf(10, "sanskrit", 1) },
                    { number: 2, title: "Chp-2", pdfUrl: pdf(10, "sanskrit", 2) },
                    { number: 3, title: "Chp-3", pdfUrl: pdf(10, "sanskrit", 3) },
                    { number: 4, title: "Chp-4", pdfUrl: pdf(10, "sanskrit", 4) },
                    { number: 5, title: "Chp-5", pdfUrl: pdf(10, "sanskrit", 5) },
                    { number: 6, title: "Chp-6", pdfUrl: pdf(10, "sanskrit", 6) },
                    { number: 7, title: "Chp-7", pdfUrl: pdf(10, "sanskrit", 7) },
                    { number: 8, title: "Chp-8", pdfUrl: pdf(10, "sanskrit", 8) },
                    { number: 9, title: "Chp-9", pdfUrl: pdf(10, "sanskrit", 9) },
                    { number: 10, title: "Chp-10", pdfUrl: pdf(10, "sanskrit", 10) },
                ]
            },
            {
                id: "sanskrit-abhyaswaan",
                name: "Sanskrit",
                book: "Abhyaswaan Bhav II",
                icon: "📜",
                chapters: [
                    { number: 1, title: "Chp-1", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 1) },
                    { number: 2, title: "Chp-2", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 2) },
                    { number: 3, title: "Chp-3", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 3) },
                    { number: 4, title: "Chp-4", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 4) },
                    { number: 5, title: "Chp-5", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 5) },
                    { number: 6, title: "Chp-6", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 6) },
                    { number: 7, title: "Chp-7", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 7) },
                    { number: 8, title: "Chp-8", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 8) },
                    { number: 9, title: "Chp-9", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 9) },
                    { number: 10, title: "Chp-10", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 10) },
                    { number: 11, title: "Chp-11", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 11) },
                    { number: 12, title: "Chp-12", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 12) },
                    { number: 13, title: "Chp-13", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 13) },
                    { number: 14, title: "Chp-14", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 14) },
                    { number: 15, title: "Chp-15", pdfUrl: pdf(10, "sanskrit-abhyaswaan", 15) },
                ]
            },
            {
                id: "sanskrit-vyakaranavithi",
                name: "Sanskrit",
                book: "Vyakaranavithi",
                icon: "📜",
                chapters: [
                    { number: 1, title: "Chp-1", pdfUrl: pdf(10, "sanskrit-vyakaranavithi", 1) },
                    { number: 2, title: "Chp-2", pdfUrl: pdf(10, "sanskrit-vyakaranavithi", 2) },
                    { number: 3, title: "Chp-3", pdfUrl: pdf(10, "sanskrit-vyakaranavithi", 3) },
                    { number: 4, title: "Chp-4", pdfUrl: pdf(10, "sanskrit-vyakaranavithi", 4) },
                    { number: 5, title: "Chp-5", pdfUrl: pdf(10, "sanskrit-vyakaranavithi", 5) },
                    { number: 6, title: "Chp-6", pdfUrl: pdf(10, "sanskrit-vyakaranavithi", 6) },
                    { number: 7, title: "Chp-7", pdfUrl: pdf(10, "sanskrit-vyakaranavithi", 7) },
                    { number: 8, title: "Chp-8", pdfUrl: pdf(10, "sanskrit-vyakaranavithi", 8) },
                    { number: 9, title: "Chp-9", pdfUrl: pdf(10, "sanskrit-vyakaranavithi", 9) },
                    { number: 10, title: "Chp-10", pdfUrl: pdf(10, "sanskrit-vyakaranavithi", 10) },
                    { number: 11, title: "Chp-11", pdfUrl: pdf(10, "sanskrit-vyakaranavithi", 11) },
                    { number: 12, title: "Chp-12", pdfUrl: pdf(10, "sanskrit-vyakaranavithi", 12) },
                    { number: 13, title: "Chp-13", pdfUrl: pdf(10, "sanskrit-vyakaranavithi", 13) },
                    { number: 14, title: "Chp-14", pdfUrl: pdf(10, "sanskrit-vyakaranavithi", 14) },
                ]
            },
            {
                id: "history",
                name: "History",
                book: "India and the Contemporary World II",
                icon: "🏛️",
                chapters: [
                    { number: 1, title: "The Rise of Nationalism in Europe", pdfUrl: pdf(10, "history", 1) },
                    { number: 2, title: "Nationalism in India", pdfUrl: pdf(10, "history", 2) },
                    { number: 3, title: "The Making of a Global World", pdfUrl: pdf(10, "history", 3) },
                    { number: 4, title: "The Age of Industrialisation", pdfUrl: pdf(10, "history", 4) },
                    { number: 5, title: "Print Culture and the Modern World", pdfUrl: pdf(10, "history", 5) },
                ]
            },
            {
                id: "civics",
                name: "Political Science",
                book: "Democratic Politics II",
                icon: "⚖️",
                chapters: [
                    { number: 1, title: "Power-sharing", pdfUrl: pdf(10, "civics", 1) },
                    { number: 2, title: "Federalism", pdfUrl: pdf(10, "civics", 2) },
                    { number: 3, title: "Gender, Religion and Caste", pdfUrl: pdf(10, "civics", 3) },
                    { number: 4, title: "Political Parties", pdfUrl: pdf(10, "civics", 4) },
                    { number: 5, title: "Outcomes of Democracy", pdfUrl: pdf(10, "civics", 5) },
                ]
            },
            {
                id: "geography",
                name: "Geography",
                book: "Contemporary India II",
                icon: "🌍",
                chapters: [
                    { number: 1, title: "Resources and Development", pdfUrl: pdf(10, "geography", 1) },
                    { number: 2, title: "Forest and Wildlife Resources", pdfUrl: pdf(10, "geography", 2) },
                    { number: 3, title: "Water Resources", pdfUrl: pdf(10, "geography", 3) },
                    { number: 4, title: "Agriculture", pdfUrl: pdf(10, "geography", 4) },
                    { number: 5, title: "Minerals and Energy Resources", pdfUrl: pdf(10, "geography", 5) },
                    { number: 6, title: "Manufacturing Industries", pdfUrl: pdf(10, "geography", 6) },
                    { number: 7, title: "Lifelines of National Economy", pdfUrl: pdf(10, "geography", 7) },
                ]
            },
            {
                id: "economics",
                name: "Economics",
                book: "Understanding Economic Development",
                icon: "💰",
                chapters: [
                    { number: 1, title: "Development", pdfUrl: pdf(10, "economics", 1) },
                    { number: 2, title: "Sectors of the Indian Economy", pdfUrl: pdf(10, "economics", 2) },
                    { number: 3, title: "Money and Credit", pdfUrl: pdf(10, "economics", 3) },
                    { number: 4, title: "Globalisation and the Indian Economy", pdfUrl: pdf(10, "economics", 4) },
                    { number: 5, title: "Consumer Rights", pdfUrl: pdf(10, "economics", 5) },
                ]
            },
            {
                id: "english-words-and-expressions",
                name: "English",
                book: "Words and Expressions 2",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Unit 1", pdfUrl: "/pdfs/class-10/english-words-and-expressions/chapter-1.pdf" },
                    { number: 2, title: "Unit 2", pdfUrl: "/pdfs/class-10/english-words-and-expressions/chapter-2.pdf" },
                    { number: 3, title: "Unit 3", pdfUrl: "/pdfs/class-10/english-words-and-expressions/chapter-3.pdf" },
                    { number: 4, title: "Unit 4", pdfUrl: "/pdfs/class-10/english-words-and-expressions/chapter-4.pdf" },
                    { number: 5, title: "Unit 5", pdfUrl: "/pdfs/class-10/english-words-and-expressions/chapter-5.pdf" },
                    { number: 6, title: "Unit 6", pdfUrl: "/pdfs/class-10/english-words-and-expressions/chapter-6.pdf" },
                    { number: 7, title: "Unit 7", pdfUrl: "/pdfs/class-10/english-words-and-expressions/chapter-7.pdf" },
                    { number: 8, title: "Unit 8", pdfUrl: "/pdfs/class-10/english-words-and-expressions/chapter-8.pdf" },
                    { number: 9, title: "Unit 9", pdfUrl: "/pdfs/class-10/english-words-and-expressions/chapter-9.pdf" }
                ]
            },
            {
                id: "physical-education",
                name: "Health and Physical Education",
                book: "Health and Physical Education",
                icon: "🏃",
                chapters: [
                    { number: 1, title: "Physical Education: Relation with other Subjects", pdfUrl: "/pdfs/class-10/physical-education/chapter-1.pdf" },
                    { number: 2, title: "Effects of Physical Activities on Human Body", pdfUrl: "/pdfs/class-10/physical-education/chapter-2.pdf" },
                    { number: 3, title: "Growth and Development during Adolescence", pdfUrl: "/pdfs/class-10/physical-education/chapter-3.pdf" },
                    { number: 4, title: "Individual Games and Sports I", pdfUrl: "/pdfs/class-10/physical-education/chapter-4.pdf" },
                    { number: 5, title: "Individual Games and Sports II", pdfUrl: "/pdfs/class-10/physical-education/chapter-5.pdf" },
                    { number: 6, title: "Team Games and Sports I", pdfUrl: "/pdfs/class-10/physical-education/chapter-6.pdf" },
                    { number: 7, title: "Team Games and Sports II", pdfUrl: "/pdfs/class-10/physical-education/chapter-7.pdf" },
                    { number: 8, title: "Yoga for Healthy Living", pdfUrl: "/pdfs/class-10/physical-education/chapter-8.pdf" },
                    { number: 9, title: "Dietary Considerations and Food Quality", pdfUrl: "/pdfs/class-10/physical-education/chapter-9.pdf" },
                    { number: 10, title: "Safety for Healthy Living", pdfUrl: "/pdfs/class-10/physical-education/chapter-10.pdf" },
                    { number: 11, title: "Healthy Community Living", pdfUrl: "/pdfs/class-10/physical-education/chapter-11.pdf" },
                    { number: 12, title: "Social Health", pdfUrl: "/pdfs/class-10/physical-education/chapter-12.pdf" },
                    { number: 13, title: "Agencies and Awards Promoting Health, Sport and Yoga", pdfUrl: "/pdfs/class-10/physical-education/chapter-13.pdf" }
                ]
            }
        ]
    },
    {
        id: 11,
        name: "Class 11",
        subjects: [
            {
                id: "physics",
                name: "Physics",
                book: "Physics Part I & II",
                icon: "⚛️",
                chapters: [
                    { number: 1, title: "Units and Measurements", pdfUrl: pdf(11, "physics", 1) },
                    { number: 2, title: "Motion in a Straight Line", pdfUrl: pdf(11, "physics", 2) },
                    { number: 3, title: "Motion in a Plane", pdfUrl: pdf(11, "physics", 3) },
                    { number: 4, title: "Laws of Motion", pdfUrl: pdf(11, "physics", 4) },
                    { number: 5, title: "Work, Energy and Power", pdfUrl: pdf(11, "physics", 5) },
                    { number: 6, title: "System of Particles and Rotational Motion", pdfUrl: pdf(11, "physics", 6) },
                    { number: 7, title: "Gravitation", pdfUrl: pdf(11, "physics", 7) },
                    { number: 8, title: "Mechanical Properties of Solids", pdfUrl: pdf(11, "physics", 8) },
                    { number: 9, title: "Mechanical Properties of Fluids", pdfUrl: pdf(11, "physics", 9) },
                    { number: 10, title: "Thermal Properties of Matter", pdfUrl: pdf(11, "physics", 10) },
                    { number: 11, title: "Thermodynamics", pdfUrl: pdf(11, "physics", 11) },
                    { number: 12, title: "Kinetic Theory", pdfUrl: pdf(11, "physics", 12) },
                    { number: 13, title: "Oscillations", pdfUrl: pdf(11, "physics", 13) },
                    { number: 14, title: "Waves", pdfUrl: pdf(11, "physics", 14) }
                ]
            },
            {
                id: "chemistry",
                name: "Chemistry",
                book: "Chemistry Part I & II",
                icon: "🧪",
                chapters: [
                    { number: 1, title: "Some Basic Concepts of Chemistry", pdfUrl: pdf(11, "chemistry", 1) },
                    { number: 2, title: "Structure of Atom", pdfUrl: pdf(11, "chemistry", 2) },
                    { number: 3, title: "Classification of Elements and Periodicity in Properties", pdfUrl: pdf(11, "chemistry", 3) },
                    { number: 4, title: "Chemical Bonding and Molecular Structure", pdfUrl: pdf(11, "chemistry", 4) },
                    { number: 5, title: "Thermodynamics", pdfUrl: pdf(11, "chemistry", 5) },
                    { number: 6, title: "Equilibrium", pdfUrl: pdf(11, "chemistry", 6) },
                    { number: 7, title: "Redox Reactions", pdfUrl: pdf(11, "chemistry", 7) },
                    { number: 8, title: "Organic Chemistry - Some Basic Principles and Techniques", pdfUrl: pdf(11, "chemistry", 8) },
                    { number: 9, title: "Hydrocarbons", pdfUrl: pdf(11, "chemistry", 9) }
                ]
            },
            {
                id: "biology",
                name: "Biology",
                book: "Biology",
                icon: "🧬",
                chapters: [
                    { number: 1, title: "The Living World", pdfUrl: pdf(11, "biology", 1) },
                    { number: 2, title: "Biological Classification", pdfUrl: pdf(11, "biology", 2) },
                    { number: 3, title: "Plant Kingdom", pdfUrl: pdf(11, "biology", 3) },
                    { number: 4, title: "Animal Kingdom", pdfUrl: pdf(11, "biology", 4) },
                    { number: 5, title: "Morphology of Flowering Plants", pdfUrl: pdf(11, "biology", 5) },
                    { number: 6, title: "Anatomy of Flowering Plants", pdfUrl: pdf(11, "biology", 6) },
                    { number: 7, title: "Structural Organisation in Animals", pdfUrl: pdf(11, "biology", 7) },
                    { number: 8, title: "Cell: The Unit of Life", pdfUrl: pdf(11, "biology", 8) },
                    { number: 9, title: "Biomolecules", pdfUrl: pdf(11, "biology", 9) },
                    { number: 10, title: "Cell Cycle and Cell Division", pdfUrl: pdf(11, "biology", 10) },
                    { number: 11, title: "Photosynthesis in Higher Plants", pdfUrl: pdf(11, "biology", 11) },
                    { number: 12, title: "Respiration in Plants", pdfUrl: pdf(11, "biology", 12) },
                    { number: 13, title: "Plant Growth and Development", pdfUrl: pdf(11, "biology", 13) },
                    { number: 14, title: "Breathing and Exchange of Gases", pdfUrl: pdf(11, "biology", 14) },
                    { number: 15, title: "Body Fluids and Circulation", pdfUrl: pdf(11, "biology", 15) },
                    { number: 16, title: "Excretory Products and their Elimination", pdfUrl: pdf(11, "biology", 16) },
                    { number: 17, title: "Locomotion and Movement", pdfUrl: pdf(11, "biology", 17) },
                    { number: 18, title: "Neural Control and Coordination", pdfUrl: pdf(11, "biology", 18) },
                    { number: 19, title: "Chemical Coordination and Integration", pdfUrl: pdf(11, "biology", 19) }
                ]
            },
            {
                id: "math",
                name: "Mathematics",
                book: "Mathematics",
                icon: "📐",
                chapters: [
                    { number: 1, title: "Sets", pdfUrl: pdf(11, "math", 1) },
                    { number: 2, title: "Relations and Functions", pdfUrl: pdf(11, "math", 2) },
                    { number: 3, title: "Trigonometric Functions", pdfUrl: pdf(11, "math", 3) },
                    { number: 4, title: "Complex Numbers and Quadratic Equations", pdfUrl: pdf(11, "math", 4) },
                    { number: 5, title: "Linear Inequalities", pdfUrl: pdf(11, "math", 5) },
                    { number: 6, title: "Permutations and Combinations", pdfUrl: pdf(11, "math", 6) },
                    { number: 7, title: "Binomial Theorem", pdfUrl: pdf(11, "math", 7) },
                    { number: 8, title: "Sequences and Series", pdfUrl: pdf(11, "math", 8) },
                    { number: 9, title: "Straight Lines", pdfUrl: pdf(11, "math", 9) },
                    { number: 10, title: "Conic Sections", pdfUrl: pdf(11, "math", 10) },
                    { number: 11, title: "Introduction to Three Dimensional Geometry", pdfUrl: pdf(11, "math", 11) },
                    { number: 12, title: "Limits and Derivatives", pdfUrl: pdf(11, "math", 12) },
                    { number: 13, title: "Statistics", pdfUrl: pdf(11, "math", 13) },
                    { number: 14, title: "Probability", pdfUrl: pdf(11, "math", 14) }
                ]
            },
            {
                id: "english-hornbill",
                name: "English",
                book: "Hornbill",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Chapter 1", pdfUrl: "/pdfs/class-11/english/hornbill/chapter-1.pdf" },
                    { number: 2, title: "Chapter 2", pdfUrl: "/pdfs/class-11/english/hornbill/chapter-2.pdf" },
                    { number: 3, title: "Chapter 3", pdfUrl: "/pdfs/class-11/english/hornbill/chapter-3.pdf" },
                    { number: 4, title: "Chapter 4", pdfUrl: "/pdfs/class-11/english/hornbill/chapter-4.pdf" },
                    { number: 5, title: "Chapter 5", pdfUrl: "/pdfs/class-11/english/hornbill/chapter-5.pdf" },
                    { number: 6, title: "Chapter 6", pdfUrl: "/pdfs/class-11/english/hornbill/chapter-6.pdf" },
                    { number: 7, title: "Chapter 7", pdfUrl: "/pdfs/class-11/english/hornbill/chapter-7.pdf" },
                    { number: 8, title: "Chapter 8", pdfUrl: "/pdfs/class-11/english/hornbill/chapter-8.pdf" },
                    { number: 9, title: "Chapter 9", pdfUrl: "/pdfs/class-11/english/hornbill/chapter-9.pdf" },
                    { number: 10, title: "Chapter 10", pdfUrl: "/pdfs/class-11/english/hornbill/chapter-10.pdf" },
                    { number: 11, title: "Chapter 11", pdfUrl: "/pdfs/class-11/english/hornbill/chapter-11.pdf" },
                    { number: 12, title: "Chapter 12", pdfUrl: "/pdfs/class-11/english/hornbill/chapter-12.pdf" }
                ]
            },
            {
                id: "english-snapshots-kesp1dd",
                name: "English",
                book: "Snapshots",
                icon: "📖",
                chapters: [
          {
                    number: 1,
                    title: "The Summer of the Beautiful White Horse",
                    pdfUrl: "/pdfs/class-11/english-snapshots/snapshots/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "The Address",
                    pdfUrl: "/pdfs/class-11/english-snapshots/snapshots/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Mother's Day",
                    pdfUrl: "/pdfs/class-11/english-snapshots/snapshots/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Birth",
                    pdfUrl: "/pdfs/class-11/english-snapshots/snapshots/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "The Tale of Melon City",
                    pdfUrl: "/pdfs/class-11/english-snapshots/snapshots/chapter-5.pdf"
          }
]
            },
            {
                id: "english-woven-words",
                name: "English",
                book: "Woven Words",
                icon: "📖",
                chapters: [
                    { number: 1, title: "Short Stories - Chapter 1", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-1.pdf" },
                    { number: 2, title: "Short Stories - Chapter 2", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-2.pdf" },
                    { number: 3, title: "Short Stories - Chapter 3", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-3.pdf" },
                    { number: 4, title: "Short Stories - Chapter 4", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-4.pdf" },
                    { number: 5, title: "Short Stories - Chapter 5", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-5.pdf" },
                    { number: 6, title: "Short Stories - Chapter 6", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-6.pdf" },
                    { number: 7, title: "Short Stories - Chapter 7", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-7.pdf" },
                    { number: 8, title: "Short Stories - Chapter 8", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-8.pdf" },
                    { number: 9, title: "Poetry - Chapter 1", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-9.pdf" },
                    { number: 10, title: "Poetry - Chapter 2", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-10.pdf" },
                    { number: 11, title: "Poetry - Chapter 3", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-11.pdf" },
                    { number: 12, title: "Poetry - Chapter 4", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-12.pdf" },
                    { number: 13, title: "Poetry - Chapter 5", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-13.pdf" },
                    { number: 14, title: "Poetry - Chapter 6", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-14.pdf" },
                    { number: 15, title: "Poetry - Chapter 7", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-15.pdf" },
                    { number: 16, title: "Poetry - Chapter 8", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-16.pdf" },
                    { number: 17, title: "Poetry - Chapter 9", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-17.pdf" },
                    { number: 18, title: "Poetry - Chapter 10", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-18.pdf" },
                    { number: 19, title: "Poetry - Chapter 11", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-19.pdf" },
                    { number: 20, title: "Poetry - Chapter 12", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-20.pdf" },
                    { number: 21, title: "Essay - Chapter 1", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-21.pdf" },
                    { number: 22, title: "Essay - Chapter 2", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-22.pdf" },
                    { number: 23, title: "Essay - Chapter 3", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-23.pdf" },
                    { number: 24, title: "Essay - Chapter 4", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-24.pdf" },
                    { number: 25, title: "Essay - Chapter 5", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-25.pdf" },
                    { number: 26, title: "Essay - Chapter 6", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-26.pdf" },
                    { number: 27, title: "Essay - Chapter 7", pdfUrl: "/pdfs/class-11/english/woven-words/chapter-27.pdf" }
                ]
            }
        ,
            {
                id: "accountancy-keac1dd",
                name: "Accountancy",
                book: "Financial Accounting - I",
                icon: "📊",
                chapters: [
          {
                    number: 1,
                    title: "Introduction to Accounting",
                    pdfUrl: "/pdfs/class-11/accountancy/financial-accounting-i/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Theory Base of Accounting",
                    pdfUrl: "/pdfs/class-11/accountancy/financial-accounting-i/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Recording of Transactions - I",
                    pdfUrl: "/pdfs/class-11/accountancy/financial-accounting-i/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Recording of Transactions - II",
                    pdfUrl: "/pdfs/class-11/accountancy/financial-accounting-i/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Bank Reconciliation Statement",
                    pdfUrl: "/pdfs/class-11/accountancy/financial-accounting-i/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Trial Balance and Rectification of Errors",
                    pdfUrl: "/pdfs/class-11/accountancy/financial-accounting-i/chapter-6.pdf"
          },
          {
                    number: 7,
                    title: "Depreciation, Provisions and Reserves",
                    pdfUrl: "/pdfs/class-11/accountancy/financial-accounting-i/chapter-7.pdf"
          }
]
            },
            {
                id: "accountancy-keac2dd",
                name: "Accountancy",
                book: "Financial Accounting - II",
                icon: "📊",
                chapters: [
          {
                    number: 1,
                    title: "Financial Statements - I",
                    pdfUrl: "/pdfs/class-11/accountancy/financial-accounting-ii/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Financial Statements - II",
                    pdfUrl: "/pdfs/class-11/accountancy/financial-accounting-ii/chapter-2.pdf"
          }
]
            },
            {
                id: "geography-kegy1dd",
                name: "Geography",
                book: "Fundamentals of Physical Geography",
                icon: "🌍",
                chapters: [
          {
                    number: 1,
                    title: "Geography as a Discipline",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "The Origin and Evolution of the Earth",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Interior of the Earth",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Distribution of Oceans and Continents",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Minerals and Rocks",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Geomorphic Processes",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-6.pdf"
          },
          {
                    number: 7,
                    title: "Landforms and their Evolution",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-7.pdf"
          },
          {
                    number: 8,
                    title: "Composition and Structure of Atmosphere",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-8.pdf"
          },
          {
                    number: 9,
                    title: "Solar Radiation, Heat Balance and Temperature",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-9.pdf"
          },
          {
                    number: 10,
                    title: "Atmospheric Circulation and Weather Systems",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-10.pdf"
          },
          {
                    number: 11,
                    title: "Water in the Atmosphere",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-11.pdf"
          },
          {
                    number: 12,
                    title: "World Climate and Climate Change",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-12.pdf"
          },
          {
                    number: 13,
                    title: "Water (Oceans)",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-13.pdf"
          },
          {
                    number: 14,
                    title: "Movements of Ocean Water",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-14.pdf"
          },
          {
                    number: 15,
                    title: "Glossary",
                    pdfUrl: "/pdfs/class-11/geography/fundamentals-of-physical-geography/chapter-15.pdf"
          }
                ]
            },
            {
                id: "geography-kegy2dd",
                name: "Geography",
                book: "India Physical Environment",
                icon: "🌍",
                chapters: [
          {
                    number: 1,
                    title: "India - Location",
                    pdfUrl: "/pdfs/class-11/geography/india-physical-environment/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Structure and Physiography",
                    pdfUrl: "/pdfs/class-11/geography/india-physical-environment/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Drainage System",
                    pdfUrl: "/pdfs/class-11/geography/india-physical-environment/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Climate",
                    pdfUrl: "/pdfs/class-11/geography/india-physical-environment/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Natural Vegetation",
                    pdfUrl: "/pdfs/class-11/geography/india-physical-environment/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Natural Hazards and Disasters",
                    pdfUrl: "/pdfs/class-11/geography/india-physical-environment/chapter-6.pdf"
          }
                ]
            },
            {
                id: "geography-kegy3dd",
                name: "Geography",
                book: "Practical Work in Geography",
                icon: "🌍",
                chapters: [
          {
                    number: 1,
                    title: "Introduction to Maps",
                    pdfUrl: "/pdfs/class-11/geography/practical-work-in-geography/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Map Scale",
                    pdfUrl: "/pdfs/class-11/geography/practical-work-in-geography/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Latitude, Longitude and Time",
                    pdfUrl: "/pdfs/class-11/geography/practical-work-in-geography/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Map Projections",
                    pdfUrl: "/pdfs/class-11/geography/practical-work-in-geography/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Topographical Maps",
                    pdfUrl: "/pdfs/class-11/geography/practical-work-in-geography/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Introduction To Remote Sensing",
                    pdfUrl: "/pdfs/class-11/geography/practical-work-in-geography/chapter-6.pdf"
          }
                ]
            },
            {
                id: "psychology-kepy1dd",
                name: "Psychology",
                book: "Psychology",
                icon: "🧠",
                chapters: [
          {
                    number: 1,
                    title: "What is Psychology?",
                    pdfUrl: "/pdfs/class-11/psychology/psychology/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Methods of Enquiry in Psychology",
                    pdfUrl: "/pdfs/class-11/psychology/psychology/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Human Development",
                    pdfUrl: "/pdfs/class-11/psychology/psychology/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Sensory, Attentional and Perceptual Processes",
                    pdfUrl: "/pdfs/class-11/psychology/psychology/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Learning",
                    pdfUrl: "/pdfs/class-11/psychology/psychology/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Human Memory",
                    pdfUrl: "/pdfs/class-11/psychology/psychology/chapter-6.pdf"
          },
          {
                    number: 7,
                    title: "Thinking",
                    pdfUrl: "/pdfs/class-11/psychology/psychology/chapter-7.pdf"
          },
          {
                    number: 8,
                    title: "Motivation and Emotion",
                    pdfUrl: "/pdfs/class-11/psychology/psychology/chapter-8.pdf"
          }
]
            },
            {
                id: "sociology-kesy1dd",
                name: "Sociology",
                book: "Introducing Sociology",
                icon: "🤝",
                chapters: [
          {
                    number: 1,
                    title: "Sociology and Society",
                    pdfUrl: "/pdfs/class-11/sociology/introducing-sociology/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Terms, Concepts and their use in Sociology",
                    pdfUrl: "/pdfs/class-11/sociology/introducing-sociology/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Understanding Social Institutions",
                    pdfUrl: "/pdfs/class-11/sociology/introducing-sociology/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Culture and Socialisation",
                    pdfUrl: "/pdfs/class-11/sociology/introducing-sociology/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Doing Sociology: Research Methods",
                    pdfUrl: "/pdfs/class-11/sociology/introducing-sociology/chapter-5.pdf"
          }
]
            },
            {
                id: "sociology-kesy2dd",
                name: "Sociology",
                book: "Understanding Society",
                icon: "🤝",
                chapters: [
          {
                    number: 1,
                    title: "Social Structure, Stratification and Social Processes in Society",
                    pdfUrl: "/pdfs/class-11/sociology/understanding-society/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Social Change and Social Order in Rural and Urban Society",
                    pdfUrl: "/pdfs/class-11/sociology/understanding-society/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Environment and Society",
                    pdfUrl: "/pdfs/class-11/sociology/understanding-society/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Introducing Western Sociologists",
                    pdfUrl: "/pdfs/class-11/sociology/understanding-society/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Indian Sociologists",
                    pdfUrl: "/pdfs/class-11/sociology/understanding-society/chapter-5.pdf"
          }
]
            },
            {
                id: "fine-arts-khan1dd",
                name: "Fine Arts",
                book: "An Introduction to Indian Art Part I",
                icon: "🎨",
                chapters: [
          {
                    number: 1,
                    title: "Prehistoric Rock Paintings",
                    pdfUrl: "/pdfs/class-11/fine-arts-extra/fine-arts-extra/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Arts of the Indus Valley",
                    pdfUrl: "/pdfs/class-11/fine-arts-extra/fine-arts-extra/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Arts of the Mauryan Period",
                    pdfUrl: "/pdfs/class-11/fine-arts-extra/fine-arts-extra/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Post-Mauryan Trends in Indian Art and Architecture",
                    pdfUrl: "/pdfs/class-11/fine-arts-extra/fine-arts-extra/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Later Mural Traditions",
                    pdfUrl: "/pdfs/class-11/fine-arts-extra/fine-arts-extra/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Temple Architecture and Sculpture",
                    pdfUrl: "/pdfs/class-11/fine-arts-extra/fine-arts-extra/chapter-6.pdf"
          },
          {
                    number: 7,
                    title: "Indian Bronze Sculpture",
                    pdfUrl: "/pdfs/class-11/fine-arts-extra/fine-arts-extra/chapter-7.pdf"
          },
          {
                    number: 8,
                    title: "Some Aspects of Indo-Islamic Architecture",
                    pdfUrl: "/pdfs/class-11/fine-arts-extra/fine-arts-extra/chapter-8.pdf"
          }
]
            },
            {
                id: "hindi-aroh-khar1dd",
                name: "Hindi (Core)",
                book: "Aroh",
                icon: "📙",
                chapters: [
          {
                    number: 1,
                    title: "Chapter 1",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Chapter 2",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Chapter 3",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Chapter 4",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Chapter 5",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Chapter 6",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-6.pdf"
          },
          {
                    number: 7,
                    title: "Chapter 7",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-7.pdf"
          },
          {
                    number: 8,
                    title: "Chapter 8",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-8.pdf"
          },
          {
                    number: 9,
                    title: "Chapter 9",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-9.pdf"
          },
          {
                    number: 10,
                    title: "Chapter 10",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-10.pdf"
          },
          {
                    number: 11,
                    title: "Chapter 11",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-11.pdf"
          },
          {
                    number: 12,
                    title: "Chapter 12",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-12.pdf"
          },
          {
                    number: 13,
                    title: "Chapter 13",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-13.pdf"
          },
          {
                    number: 14,
                    title: "Chapter 14",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-14.pdf"
          },
          {
                    number: 15,
                    title: "Chapter 15",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-15.pdf"
          },
          {
                    number: 16,
                    title: "Chapter 16",
                    pdfUrl: "/pdfs/class-11/hindi-aroh/aroh/chapter-16.pdf"
          }
]
            },
            {
                id: "hindi-vitan-khvt1dd",
                name: "Hindi (Core)",
                book: "Vitan",
                icon: "📙",
                chapters: [
          {
                    number: 1,
                    title: "Chapter 1",
                    pdfUrl: "/pdfs/class-11/hindi-vitan/vitan/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Chapter 2",
                    pdfUrl: "/pdfs/class-11/hindi-vitan/vitan/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Chapter 3",
                    pdfUrl: "/pdfs/class-11/hindi-vitan/vitan/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Chapter 4",
                    pdfUrl: "/pdfs/class-11/hindi-vitan/vitan/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Chapter 5",
                    pdfUrl: "/pdfs/class-11/hindi-vitan/vitan/chapter-5.pdf"
          }
]
            },
            {
                id: "hindi-antra-khat1dd",
                name: "Hindi (Elective)",
                book: "Antra",
                icon: "📙",
                chapters: [
          {
                    number: 1,
                    title: "Chapter 1",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Chapter 2",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Chapter 3",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Chapter 4",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Chapter 5",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Chapter 6",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-6.pdf"
          },
          {
                    number: 7,
                    title: "Chapter 7",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-7.pdf"
          },
          {
                    number: 8,
                    title: "Chapter 8",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-8.pdf"
          },
          {
                    number: 9,
                    title: "Chapter 9",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-9.pdf"
          },
          {
                    number: 10,
                    title: "Chapter 10",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-10.pdf"
          },
          {
                    number: 11,
                    title: "Chapter 11",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-11.pdf"
          },
          {
                    number: 12,
                    title: "Chapter 12",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-12.pdf"
          },
          {
                    number: 13,
                    title: "Chapter 13",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-13.pdf"
          },
          {
                    number: 14,
                    title: "Chapter 14",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-14.pdf"
          },
          {
                    number: 15,
                    title: "Chapter 15",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-15.pdf"
          },
          {
                    number: 16,
                    title: "Chapter 16",
                    pdfUrl: "/pdfs/class-11/hindi-antra/antra/chapter-16.pdf"
          }
]
            }
        ,
            {
                id: "physical-education-kehp1dd",
                name: "Physical Education",
                book: "Health and Physical Education",
                icon: "🏃‍♂️",
                chapters: [
          {
                    number: 1,
                    title: "Physical Education",
                    pdfUrl: "/pdfs/class-11/physical-education/health-and-physical-education/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Understanding Health",
                    pdfUrl: "/pdfs/class-11/physical-education/health-and-physical-education/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Physical and Physiological Aspects of Physical Education and Sports",
                    pdfUrl: "/pdfs/class-11/physical-education/health-and-physical-education/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Individual Games",
                    pdfUrl: "/pdfs/class-11/physical-education/health-and-physical-education/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Team Games",
                    pdfUrl: "/pdfs/class-11/physical-education/health-and-physical-education/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Yoga and Its Relevance in the Modern Time",
                    pdfUrl: "/pdfs/class-11/physical-education/health-and-physical-education/chapter-6.pdf"
          },
          {
                    number: 7,
                    title: "Safety and Security",
                    pdfUrl: "/pdfs/class-11/physical-education/health-and-physical-education/chapter-7.pdf"
          },
          {
                    number: 8,
                    title: "Health Related Physical Fitness",
                    pdfUrl: "/pdfs/class-11/physical-education/health-and-physical-education/chapter-8.pdf"
          },
          {
                    number: 9,
                    title: "Measurements and Evaluation",
                    pdfUrl: "/pdfs/class-11/physical-education/health-and-physical-education/chapter-9.pdf"
          },
          {
                    number: 10,
                    title: "Tournaments and Competitions",
                    pdfUrl: "/pdfs/class-11/physical-education/health-and-physical-education/chapter-10.pdf"
          },
          {
                    number: 11,
                    title: "Adventure Sports",
                    pdfUrl: "/pdfs/class-11/physical-education/health-and-physical-education/chapter-11.pdf"
          }
]
            },
            {
                id: "informatics-practices-keip1dd",
                name: "Informatics Practices",
                book: "Informatics Practices",
                icon: "💻",
                chapters: [
          {
                    number: 1,
                    title: "Computer System",
                    pdfUrl: "/pdfs/class-11/informatics-practices/informatics-practices/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Emerging Trends",
                    pdfUrl: "/pdfs/class-11/informatics-practices/informatics-practices/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Brief Overview of Python",
                    pdfUrl: "/pdfs/class-11/informatics-practices/informatics-practices/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Working with Lists and Dictionaries",
                    pdfUrl: "/pdfs/class-11/informatics-practices/informatics-practices/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Understanding Data",
                    pdfUrl: "/pdfs/class-11/informatics-practices/informatics-practices/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Introduction to NumPy",
                    pdfUrl: "/pdfs/class-11/informatics-practices/informatics-practices/chapter-6.pdf"
          },
          {
                    number: 7,
                    title: "Database Concepts",
                    pdfUrl: "/pdfs/class-11/informatics-practices/informatics-practices/chapter-7.pdf"
          },
          {
                    number: 8,
                    title: "Introduction to Structured Query Language (SQL)",
                    pdfUrl: "/pdfs/class-11/informatics-practices/informatics-practices/chapter-8.pdf"
          }
]
            },
            {
                id: "business-studies-kebs1dd",
                name: "Business Studies",
                book: "Business Studies",
                icon: "💼",
                chapters: [
          {
                    number: 1,
                    title: "Business, Trade and Commerce",
                    pdfUrl: "/pdfs/class-11/business-studies/business-studies/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Forms of Business Organisation",
                    pdfUrl: "/pdfs/class-11/business-studies/business-studies/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Private, Public and Global Enterprises",
                    pdfUrl: "/pdfs/class-11/business-studies/business-studies/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Business Services",
                    pdfUrl: "/pdfs/class-11/business-studies/business-studies/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Emerging Modes of Business",
                    pdfUrl: "/pdfs/class-11/business-studies/business-studies/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Social Responsibilities of Business and Business Ethics",
                    pdfUrl: "/pdfs/class-11/business-studies/business-studies/chapter-6.pdf"
          },
          {
                    number: 7,
                    title: "Formation of a Company",
                    pdfUrl: "/pdfs/class-11/business-studies/business-studies/chapter-7.pdf"
          },
          {
                    number: 8,
                    title: "Sources of Business Finance",
                    pdfUrl: "/pdfs/class-11/business-studies/business-studies/chapter-8.pdf"
          },
          {
                    number: 9,
                    title: "Small Business and Entrepreneurship",
                    pdfUrl: "/pdfs/class-11/business-studies/business-studies/chapter-9.pdf"
          },
          {
                    number: 10,
                    title: "Internal Trade",
                    pdfUrl: "/pdfs/class-11/business-studies/business-studies/chapter-10.pdf"
          },
          {
                    number: 11,
                    title: "International Business",
                    pdfUrl: "/pdfs/class-11/business-studies/business-studies/chapter-11.pdf"
          }
]
            },
            {
                id: "economics-statistics-kest1dd",
                name: "Economics",
                book: "Statistics for Economics",
                icon: "📈",
                chapters: [
          {
                    number: 1,
                    title: "Introduction to Statistics",
                    pdfUrl: "/pdfs/class-11/economics-statistics/statistics-for-economics/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Collection of Data",
                    pdfUrl: "/pdfs/class-11/economics-statistics/statistics-for-economics/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Organisation of Data",
                    pdfUrl: "/pdfs/class-11/economics-statistics/statistics-for-economics/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Presentation of Data",
                    pdfUrl: "/pdfs/class-11/economics-statistics/statistics-for-economics/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Measures of Central Tendency",
                    pdfUrl: "/pdfs/class-11/economics-statistics/statistics-for-economics/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Measures of Dispersion",
                    pdfUrl: "/pdfs/class-11/economics-statistics/statistics-for-economics/chapter-6.pdf"
          },
          {
                    number: 7,
                    title: "Correlation",
                    pdfUrl: "/pdfs/class-11/economics-statistics/statistics-for-economics/chapter-7.pdf"
          },
          {
                    number: 8,
                    title: "Index Numbers",
                    pdfUrl: "/pdfs/class-11/economics-statistics/statistics-for-economics/chapter-8.pdf"
          }
]
            },
            {
                id: "economics-indian-keec1dd",
                name: "Economics",
                book: "Indian Economic Development",
                icon: "📈",
                chapters: [
          {
                    number: 1,
                    title: "Indian Economy on the Eve of Independence",
                    pdfUrl: "/pdfs/class-11/economics-indian/indian-economic-development/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Indian Economy (1950-1990)",
                    pdfUrl: "/pdfs/class-11/economics-indian/indian-economic-development/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Liberalisation, Privatisation and Globalisation: An Appraisal",
                    pdfUrl: "/pdfs/class-11/economics-indian/indian-economic-development/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Human Capital Formation in India",
                    pdfUrl: "/pdfs/class-11/economics-indian/indian-economic-development/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Rural Development",
                    pdfUrl: "/pdfs/class-11/economics-indian/indian-economic-development/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Employment: Growth, Informalisation and Other Issues",
                    pdfUrl: "/pdfs/class-11/economics-indian/indian-economic-development/chapter-6.pdf"
          },
          {
                    number: 7,
                    title: "Environment and Sustainable Development",
                    pdfUrl: "/pdfs/class-11/economics-indian/indian-economic-development/chapter-7.pdf"
          },
          {
                    number: 8,
                    title: "Comparative Development Experiences of India and its Neighbours",
                    pdfUrl: "/pdfs/class-11/economics-indian/indian-economic-development/chapter-8.pdf"
          }
]
            },
            {
                id: "history-kehs1dd",
                name: "History",
                book: "Themes in World History",
                icon: "🏛️",
                chapters: [
          {
                    number: 1,
                    title: "Writing and City Life",
                    pdfUrl: "/pdfs/class-11/history/themes-in-world-history/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "An Empire Across Three Continents",
                    pdfUrl: "/pdfs/class-11/history/themes-in-world-history/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Nomadic Empires",
                    pdfUrl: "/pdfs/class-11/history/themes-in-world-history/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "The Three Orders",
                    pdfUrl: "/pdfs/class-11/history/themes-in-world-history/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Changing Cultural Traditions",
                    pdfUrl: "/pdfs/class-11/history/themes-in-world-history/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Displacing Indigenous Peoples",
                    pdfUrl: "/pdfs/class-11/history/themes-in-world-history/chapter-6.pdf"
          },
          {
                    number: 7,
                    title: "Paths to Modernisation",
                    pdfUrl: "/pdfs/class-11/history/themes-in-world-history/chapter-7.pdf"
          }
]
            },
            {
                id: "political-science-theory-keps1dd",
                name: "Political Science",
                book: "Political Theory",
                icon: "⚖️",
                chapters: [
          {
                    number: 1,
                    title: "Political Theory: An Introduction",
                    pdfUrl: "/pdfs/class-11/political-science-theory/keps1dd/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Freedom",
                    pdfUrl: "/pdfs/class-11/political-science-theory/keps1dd/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Equality",
                    pdfUrl: "/pdfs/class-11/political-science-theory/keps1dd/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Social Justice",
                    pdfUrl: "/pdfs/class-11/political-science-theory/keps1dd/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Rights",
                    pdfUrl: "/pdfs/class-11/political-science-theory/keps1dd/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Citizenship",
                    pdfUrl: "/pdfs/class-11/political-science-theory/keps1dd/chapter-6.pdf"
          },
          {
                    number: 7,
                    title: "Nationalism",
                    pdfUrl: "/pdfs/class-11/political-science-theory/keps1dd/chapter-7.pdf"
          },
          {
                    number: 8,
                    title: "Secularism",
                    pdfUrl: "/pdfs/class-11/political-science-theory/keps1dd/chapter-8.pdf"
          }
                ]
            },
            {
                id: "political-science-constitution-keps2dd",
                name: "Political Science",
                book: "Indian Constitution at Work",
                icon: "⚖️",
                chapters: [
          {
                    number: 1,
                    title: "Constitution: Why and How?",
                    pdfUrl: "/pdfs/class-11/political-science-constitution/keps2dd/chapter-1.pdf"
          },
          {
                    number: 2,
                    title: "Rights in the Indian Constitution",
                    pdfUrl: "/pdfs/class-11/political-science-constitution/keps2dd/chapter-2.pdf"
          },
          {
                    number: 3,
                    title: "Election and Representation",
                    pdfUrl: "/pdfs/class-11/political-science-constitution/keps2dd/chapter-3.pdf"
          },
          {
                    number: 4,
                    title: "Executive",
                    pdfUrl: "/pdfs/class-11/political-science-constitution/keps2dd/chapter-4.pdf"
          },
          {
                    number: 5,
                    title: "Legislature",
                    pdfUrl: "/pdfs/class-11/political-science-constitution/keps2dd/chapter-5.pdf"
          },
          {
                    number: 6,
                    title: "Judiciary",
                    pdfUrl: "/pdfs/class-11/political-science-constitution/keps2dd/chapter-6.pdf"
          },
          {
                    number: 7,
                    title: "Federalism",
                    pdfUrl: "/pdfs/class-11/political-science-constitution/keps2dd/chapter-7.pdf"
          },
          {
                    number: 8,
                    title: "Local Governments",
                    pdfUrl: "/pdfs/class-11/political-science-constitution/keps2dd/chapter-8.pdf"
          },
          {
                    number: 9,
                    title: "Constitution as a Living Document",
                    pdfUrl: "/pdfs/class-11/political-science-constitution/keps2dd/chapter-9.pdf"
          },
          {
                    number: 10,
                    title: "The Philosophy of the Constitution",
                    pdfUrl: "/pdfs/class-11/political-science-constitution/keps2dd/chapter-10.pdf"
          }
                ]
            },
            {
                id: "hindi-antral",
                name: "Hindi",
                book: "Antral",
                icon: "अ",
                chapters: [
                    { number: 1, title: "Story 1", pdfUrl: "/pdfs/class-11/hindi-antral/chapter-1.pdf" },
                    { number: 2, title: "Story 2", pdfUrl: "/pdfs/class-11/hindi-antral/chapter-2.pdf" }
                ]
            }
        ]
    },

    {
        id: 12,
        name: "Class 12",
        subjects: [
            {
                id: "biology",
                name: "Biology",
                book: "Biology",
                icon: "🧬",
                chapters: [
                    { number: 1, title: "Sexual Reproduction in Flowering Plants", pdfUrl: pdf(12, "biology", 1) },
                    { number: 2, title: "Human Reproduction", pdfUrl: pdf(12, "biology", 2) },
                    { number: 3, title: "Reproductive Health", pdfUrl: pdf(12, "biology", 3) },
                    { number: 4, title: "Principles of Inheritance and Variation", pdfUrl: pdf(12, "biology", 4) },
                    { number: 5, title: "Molecular Basis of Inheritance", pdfUrl: pdf(12, "biology", 5) },
                    { number: 6, title: "Evolution", pdfUrl: pdf(12, "biology", 6) },
                    { number: 7, title: "Human Health and Disease", pdfUrl: pdf(12, "biology", 7) },
                    { number: 8, title: "Microbes in Human Welfare", pdfUrl: pdf(12, "biology", 8) },
                    { number: 9, title: "Biotechnology: Principles and Processes", pdfUrl: pdf(12, "biology", 9) },
                    { number: 10, title: "Biotechnology and its Applications", pdfUrl: pdf(12, "biology", 10) },
                    { number: 11, title: "Organisms and Populations", pdfUrl: pdf(12, "biology", 11) },
                    { number: 12, title: "Ecosystem", pdfUrl: pdf(12, "biology", 12) },
                    { number: 13, title: "Biodiversity and Conservation", pdfUrl: pdf(12, "biology", 13) },
                ]
            },
            {
                id: "chemistry",
                name: "Chemistry",
                book: "Chemistry",
                icon: "⚗️",
                chapters: [
                    { number: 1, title: "Solutions", pdfUrl: pdf(12, "chemistry", 1) },
                    { number: 2, title: "Electrochemistry", pdfUrl: pdf(12, "chemistry", 2) },
                    { number: 3, title: "Chemical Kinetics", pdfUrl: pdf(12, "chemistry", 3) },
                    { number: 4, title: "The d- and f- Block Elements", pdfUrl: pdf(12, "chemistry", 4) },
                    { number: 5, title: "Coordination Compounds", pdfUrl: pdf(12, "chemistry", 5) },
                    { number: 6, title: "Haloalkanes and Haloarenes", pdfUrl: pdf(12, "chemistry", 6) },
                    { number: 7, title: "Alcohols, Phenols and Ethers", pdfUrl: pdf(12, "chemistry", 7) },
                    { number: 8, title: "Aldehydes, Ketones and Carboxylic Acids", pdfUrl: pdf(12, "chemistry", 8) },
                    { number: 9, title: "Amines", pdfUrl: pdf(12, "chemistry", 9) },
                    { number: 10, title: "Biomolecules", pdfUrl: pdf(12, "chemistry", 10) },
                ]
            },
            {
                id: "computer-science",
                name: "Computer Science",
                book: "Computer Science",
                icon: "💻",
                chapters: [
                    { number: 1, title: "Exception Handling in Python", pdfUrl: pdf(12, "computer-science", 1) },
                    { number: 2, title: "File Handling in Python", pdfUrl: pdf(12, "computer-science", 2) },
                    { number: 3, title: "Stack", pdfUrl: pdf(12, "computer-science", 3) },
                    { number: 4, title: "Queue", pdfUrl: pdf(12, "computer-science", 4) },
                    { number: 5, title: "Sorting", pdfUrl: pdf(12, "computer-science", 5) },
                    { number: 6, title: "Searching", pdfUrl: pdf(12, "computer-science", 6) },
                    { number: 7, title: "Understanding Data", pdfUrl: pdf(12, "computer-science", 7) },
                    { number: 8, title: "Database Concepts", pdfUrl: pdf(12, "computer-science", 8) },
                    { number: 9, title: "Structured Query Language (SQL)", pdfUrl: pdf(12, "computer-science", 9) },
                    { number: 10, title: "Computer Networks", pdfUrl: pdf(12, "computer-science", 10) },
                    { number: 11, title: "Data Communication", pdfUrl: pdf(12, "computer-science", 11) },
                    { number: 12, title: "Security Aspects", pdfUrl: pdf(12, "computer-science", 12) },
                    { number: 13, title: "Project Based Learning", pdfUrl: pdf(12, "computer-science", 13) },
                ]
            },
            {
                id: "english-flamingo",
                name: "English",
                book: "Flamingo",
                icon: "📖",
                chapters: [
                    { number: 101, title: "Prose Chapter 1", pdfUrl: "/pdfs/class-12/english/flamingo/chapter-101.pdf" },
                    { number: 102, title: "Prose Chapter 2", pdfUrl: "/pdfs/class-12/english/flamingo/chapter-102.pdf" },
                    { number: 103, title: "Prose Chapter 3", pdfUrl: "/pdfs/class-12/english/flamingo/chapter-103.pdf" },
                    { number: 104, title: "Prose Chapter 4", pdfUrl: "/pdfs/class-12/english/flamingo/chapter-104.pdf" },
                    { number: 105, title: "Prose Chapter 5", pdfUrl: "/pdfs/class-12/english/flamingo/chapter-105.pdf" },
                    { number: 106, title: "Prose Chapter 6", pdfUrl: "/pdfs/class-12/english/flamingo/chapter-106.pdf" },
                    { number: 107, title: "Prose Chapter 7", pdfUrl: "/pdfs/class-12/english/flamingo/chapter-107.pdf" },
                    { number: 108, title: "Prose Chapter 8", pdfUrl: "/pdfs/class-12/english/flamingo/chapter-108.pdf" },
                    { number: 111, title: "Poetry Chapter 1", pdfUrl: "/pdfs/class-12/english/flamingo/chapter-111.pdf" },
                    { number: 112, title: "Poetry Chapter 2", pdfUrl: "/pdfs/class-12/english/flamingo/chapter-112.pdf" },
                    { number: 113, title: "Poetry Chapter 3", pdfUrl: "/pdfs/class-12/english/flamingo/chapter-113.pdf" },
                    { number: 114, title: "Poetry Chapter 4", pdfUrl: "/pdfs/class-12/english/flamingo/chapter-114.pdf" },
                    { number: 115, title: "Poetry Chapter 5", pdfUrl: "/pdfs/class-12/english/flamingo/chapter-115.pdf" },
                ]
            },
            {
                id: "english-kaleidoscope",
                name: "English",
                book: "Kaleidoscope",
                icon: "📖",
                chapters: [
                    { number: 101, title: "Short Stories Chapter 1", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-101.pdf" },
                    { number: 102, title: "Short Stories Chapter 2", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-102.pdf" },
                    { number: 103, title: "Short Stories Chapter 3", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-103.pdf" },
                    { number: 104, title: "Short Stories Chapter 4", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-104.pdf" },
                    { number: 105, title: "Short Stories Chapter 5", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-105.pdf" },
                    { number: 111, title: "Poetry Chapter 1", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-111.pdf" },
                    { number: 112, title: "Poetry Chapter 2", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-112.pdf" },
                    { number: 113, title: "Poetry Chapter 3", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-113.pdf" },
                    { number: 114, title: "Poetry Chapter 4", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-114.pdf" },
                    { number: 115, title: "Poetry Chapter 5", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-115.pdf" },
                    { number: 116, title: "Poetry Chapter 6", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-116.pdf" },
                    { number: 117, title: "Poetry Chapter 7", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-117.pdf" },
                    { number: 118, title: "Poetry Chapter 8", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-118.pdf" },
                    { number: 121, title: "Non Fiction Chapter 1", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-121.pdf" },
                    { number: 122, title: "Non Fiction Chapter 2", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-122.pdf" },
                    { number: 123, title: "Non Fiction Chapter 3", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-123.pdf" },
                    { number: 124, title: "Non Fiction Chapter 4", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-124.pdf" },
                    { number: 125, title: "Non Fiction Chapter 5", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-125.pdf" },
                    { number: 126, title: "Non Fiction Chapter 6", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-126.pdf" },
                    { number: 131, title: "Drama Chapter 1", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-131.pdf" },
                    { number: 132, title: "Drama Chapter 2", pdfUrl: "/pdfs/class-12/english/kaleidoscope/chapter-132.pdf" },
                ]
            },
            {
                id: "english-vistas",
                name: "English",
                book: "Vistas",
                icon: "📖",
                chapters: [
                    { number: 101, title: "Chapter 1", pdfUrl: "/pdfs/class-12/english/vistas/chapter-101.pdf" },
                    { number: 102, title: "Chapter 2", pdfUrl: "/pdfs/class-12/english/vistas/chapter-102.pdf" },
                    { number: 103, title: "Chapter 3", pdfUrl: "/pdfs/class-12/english/vistas/chapter-103.pdf" },
                    { number: 104, title: "Chapter 4", pdfUrl: "/pdfs/class-12/english/vistas/chapter-104.pdf" },
                    { number: 105, title: "Chapter 5", pdfUrl: "/pdfs/class-12/english/vistas/chapter-105.pdf" },
                    { number: 106, title: "Chapter 6", pdfUrl: "/pdfs/class-12/english/vistas/chapter-106.pdf" },
                ]
            },

            {
                id: "math",
                name: "Mathematics",
                book: "Mathematics",
                icon: "📐",
                chapters: [
                    { number: 1, title: "Relations and Functions", pdfUrl: pdf(12, "math", 1) },
                    { number: 2, title: "Inverse Trigonometric Functions", pdfUrl: pdf(12, "math", 2) },
                    { number: 3, title: "Matrices", pdfUrl: pdf(12, "math", 3) },
                    { number: 4, title: "Determinants", pdfUrl: pdf(12, "math", 4) },
                    { number: 5, title: "Continuity and Differentiability", pdfUrl: pdf(12, "math", 5) },
                    { number: 6, title: "Application of Derivatives", pdfUrl: pdf(12, "math", 6) },
                    { number: 7, title: "Integrals", pdfUrl: pdf(12, "math", 7) },
                    { number: 8, title: "Application of Integrals", pdfUrl: pdf(12, "math", 8) },
                    { number: 9, title: "Differential Equations", pdfUrl: pdf(12, "math", 9) },
                    { number: 10, title: "Vector Algebra", pdfUrl: pdf(12, "math", 10) },
                    { number: 11, title: "Three Dimensional Geometry", pdfUrl: pdf(12, "math", 11) },
                    { number: 12, title: "Linear Programming", pdfUrl: pdf(12, "math", 12) },
                    { number: 13, title: "Probability", pdfUrl: pdf(12, "math", 13) },
                ]
            },
            {
                id: "physics",
                name: "Physics",
                book: "Physics",
                icon: "⚛️",
                chapters: [
                    { number: 1, title: "Electric Charges and Fields", pdfUrl: pdf(12, "physics", 1) },
                    { number: 2, title: "Electrostatic Potential and Capacitance", pdfUrl: pdf(12, "physics", 2) },
                    { number: 3, title: "Current Electricity", pdfUrl: pdf(12, "physics", 3) },
                    { number: 4, title: "Moving Charges and Magnetism", pdfUrl: pdf(12, "physics", 4) },
                    { number: 5, title: "Magnetism and Matter", pdfUrl: pdf(12, "physics", 5) },
                    { number: 6, title: "Electromagnetic Induction", pdfUrl: pdf(12, "physics", 6) },
                    { number: 7, title: "Alternating Current", pdfUrl: pdf(12, "physics", 7) },
                    { number: 8, title: "Electromagnetic Waves", pdfUrl: pdf(12, "physics", 8) },
                    { number: 9, title: "Ray Optics and Optical Instruments", pdfUrl: pdf(12, "physics", 9) },
                    { number: 10, title: "Wave Optics", pdfUrl: pdf(12, "physics", 10) },
                    { number: 11, title: "Dual Nature of Radiation and Matter", pdfUrl: pdf(12, "physics", 11) },
                    { number: 12, title: "Atoms", pdfUrl: pdf(12, "physics", 12) },
                    { number: 13, title: "Nuclei", pdfUrl: pdf(12, "physics", 13) },
                    { number: 14, title: "Semiconductor Electronics: Materials, Devices and Simple Circuits", pdfUrl: pdf(12, "physics", 14) },
                ]
            },
            {
                id: "sanskrit-bhaswati",
                name: "Sanskrit",
                book: "Bhaswati",
                icon: "📜",
                chapters: [
                    { number: 1, title: "Chp-1", pdfUrl: pdf(12, "sanskrit-bhaswati", 1) },
                    { number: 2, title: "Chp-2", pdfUrl: pdf(12, "sanskrit-bhaswati", 2) },
                    { number: 3, title: "Chp-3", pdfUrl: pdf(12, "sanskrit-bhaswati", 3) },
                    { number: 4, title: "Chp-4", pdfUrl: pdf(12, "sanskrit-bhaswati", 4) },
                    { number: 5, title: "Chp-5", pdfUrl: pdf(12, "sanskrit-bhaswati", 5) },
                    { number: 6, title: "Chp-6", pdfUrl: pdf(12, "sanskrit-bhaswati", 6) },
                    { number: 7, title: "Chp-7", pdfUrl: pdf(12, "sanskrit-bhaswati", 7) },
                    { number: 8, title: "Chp-8", pdfUrl: pdf(12, "sanskrit-bhaswati", 8) },
                    { number: 9, title: "Chp-9", pdfUrl: pdf(12, "sanskrit-bhaswati", 9) },
                    { number: 10, title: "Chp-10", pdfUrl: pdf(12, "sanskrit-bhaswati", 10) },
                ]
            },
            {
                id: "sanskrit-shashwati",
                name: "Sanskrit",
                book: "Shashwati",
                icon: "📜",
                chapters: [
                    { number: 1, title: "Chp-1", pdfUrl: pdf(12, "sanskrit-shashwati", 1) },
                    { number: 2, title: "Chp-2", pdfUrl: pdf(12, "sanskrit-shashwati", 2) },
                    { number: 3, title: "Chp-3", pdfUrl: pdf(12, "sanskrit-shashwati", 3) },
                    { number: 4, title: "Chp-4", pdfUrl: pdf(12, "sanskrit-shashwati", 4) },
                    { number: 5, title: "Chp-5", pdfUrl: pdf(12, "sanskrit-shashwati", 5) },
                    { number: 6, title: "Chp-6", pdfUrl: pdf(12, "sanskrit-shashwati", 6) },
                    { number: 7, title: "Chp-7", pdfUrl: pdf(12, "sanskrit-shashwati", 7) },
                    { number: 8, title: "Chp-8", pdfUrl: pdf(12, "sanskrit-shashwati", 8) },
                    { number: 9, title: "Chp-9", pdfUrl: pdf(12, "sanskrit-shashwati", 9) },
                    { number: 10, title: "Chp-10", pdfUrl: pdf(12, "sanskrit-shashwati", 10) },
                    { number: 11, title: "Chp-11", pdfUrl: pdf(12, "sanskrit-shashwati", 11) },
                ]
            },
            {
                id: "accountancy-leac1dd",
                name: "Accountancy",
                book: "Accountancy - Partnership Accounts",
                icon: "📊",
                chapters: [
                    { number: 1, title: "Accounting for Partnership: Basic Concepts", pdfUrl: "/pdfs/class-12/accountancy/accountancy-i/chapter-1.pdf" },
                    { number: 2, title: "Reconstitution of a Partnership Firm –", pdfUrl: "/pdfs/class-12/accountancy/accountancy-i/chapter-2.pdf" },
                    { number: 3, title: "Reconstitution of a Partnership Firm –", pdfUrl: "/pdfs/class-12/accountancy/accountancy-i/chapter-3.pdf" },
                    { number: 4, title: "Dissolution of Partnership Firm", pdfUrl: "/pdfs/class-12/accountancy/accountancy-i/chapter-4.pdf" },
                ]
            },
            {
                id: "accountancy-leac2dd",
                name: "Accountancy",
                book: "Accountancy - Company Accounts and Analysis of Financial Statements",
                icon: "📊",
                chapters: [
                    { number: 1, title: "Accounting for Share Capital", pdfUrl: "/pdfs/class-12/accountancy/accountancy-ii/chapter-1.pdf" },
                    { number: 2, title: "Issue and Redemption of Debentures", pdfUrl: "/pdfs/class-12/accountancy/accountancy-ii/chapter-2.pdf" },
                    { number: 3, title: "144 Accountancy : Company Accounts and Analysis of Financial Statements", pdfUrl: "/pdfs/class-12/accountancy/accountancy-ii/chapter-3.pdf" },
                    { number: 4, title: "Analysis of Financial Statements 171", pdfUrl: "/pdfs/class-12/accountancy/accountancy-ii/chapter-4.pdf" },
                    { number: 5, title: "Accounting Ratios", pdfUrl: "/pdfs/class-12/accountancy/accountancy-ii/chapter-5.pdf" },
                    { number: 6, title: "Cash Flow Statement", pdfUrl: "/pdfs/class-12/accountancy/accountancy-ii/chapter-6.pdf" },
                ]
            },
            {
                id: "hindi-antra",
                name: "Hindi",
                book: "Antra",
                icon: "📚",
                chapters: [
                    { number: 1, title: "Chapter-1", pdfUrl: "/pdfs/class-12/hindi/antra/chapter-1.pdf" },
                    { number: 2, title: "Chapter-2", pdfUrl: "/pdfs/class-12/hindi/antra/chapter-2.pdf" },
                    { number: 3, title: "Chapter-3", pdfUrl: "/pdfs/class-12/hindi/antra/chapter-3.pdf" },
                ]
            },
            {
                id: "hindi-aroh",
                name: "Hindi",
                book: "Aroh",
                icon: "📚",
                chapters: [
                    { number: 1, title: "Chapter-1", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-1.pdf" },
                    { number: 2, title: "Chapter-2", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-2.pdf" },
                    { number: 3, title: "Chapter-3", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-3.pdf" },
                    { number: 4, title: "Chapter-4", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-4.pdf" },
                    { number: 5, title: "Chapter-5", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-5.pdf" },
                    { number: 6, title: "Chapter-6", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-6.pdf" },
                    { number: 7, title: "Chapter-7", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-7.pdf" },
                    { number: 8, title: "Chapter-8", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-8.pdf" },
                    { number: 9, title: "Chapter-9", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-9.pdf" },
                    { number: 10, title: "Chapter-10", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-10.pdf" },
                    { number: 11, title: "Chapter-11", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-11.pdf" },
                    { number: 12, title: "Chapter-12", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-12.pdf" },
                    { number: 13, title: "Chapter-13", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-13.pdf" },
                    { number: 14, title: "Chapter-14", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-14.pdf" },
                    { number: 15, title: "Chapter-15", pdfUrl: "/pdfs/class-12/hindi/aroh/chapter-15.pdf" },
                ]
            },
            {
                id: "hindi-antral",
                name: "Hindi",
                book: "Antral",
                icon: "📚",
                chapters: [
                    { number: 1, title: "Kavita 1", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-1.pdf" },
                    { number: 2, title: "Kavita 2", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-2.pdf" },
                    { number: 3, title: "Kavita 3", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-3.pdf" },
                    { number: 4, title: "Kavita 4", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-4.pdf" },
                    { number: 5, title: "Kavita 5", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-5.pdf" },
                    { number: 6, title: "Kavita 6", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-6.pdf" },
                    { number: 7, title: "Kavita 7", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-7.pdf" },
                    { number: 8, title: "Kavita 8", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-8.pdf" },
                    { number: 9, title: "Kavita 9", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-9.pdf" },
                    { number: 10, title: "Story 10", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-10.pdf" },
                    { number: 11, title: "Story 11", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-11.pdf" },
                    { number: 12, title: "Story 12", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-12.pdf" },
                    { number: 13, title: "Story 13", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-13.pdf" },
                    { number: 14, title: "Story 14", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-14.pdf" },
                    { number: 15, title: "Story 15", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-15.pdf" },
                    { number: 16, title: "Story 16", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-16.pdf" },
                    { number: 17, title: "Story 17", pdfUrl: "/pdfs/class-12/hindi/antral/chapter-17.pdf" },
                ]
            },
            {
                id: "hindi-vitan",
                name: "Hindi",
                book: "Vitan",
                icon: "📚",
                chapters: [
                    { number: 1, title: "Chapter-1", pdfUrl: "/pdfs/class-12/hindi/vitan/chapter-1.pdf" },
                    { number: 2, title: "Chapter-2", pdfUrl: "/pdfs/class-12/hindi/vitan/chapter-2.pdf" },
                    { number: 3, title: "Chapter-3", pdfUrl: "/pdfs/class-12/hindi/vitan/chapter-3.pdf" },
                ]
            },
            {
                id: "history",
                name: "History",
                book: "Themes in Indian History",
                icon: "🏛️",
                chapters: [
                    { number: 1, title: "Bricks, Beads and Bones", pdfUrl: "/pdfs/class-12/history/themes-in-indian-history-part-i/chapter-101.pdf" },
                    { number: 2, title: "Kings, Farmers and Towns", pdfUrl: "/pdfs/class-12/history/themes-in-indian-history-part-i/chapter-102.pdf" },
                    { number: 3, title: "Kinship, Caste and Class", pdfUrl: "/pdfs/class-12/history/themes-in-indian-history-part-i/chapter-103.pdf" },
                    { number: 4, title: "Thinkers, Beliefs and Buildings", pdfUrl: "/pdfs/class-12/history/themes-in-indian-history-part-i/chapter-104.pdf" },
                    { number: 5, title: "Through the Eyes of Travellers", pdfUrl: "/pdfs/class-12/history/themes-in-indian-history-part-ii/chapter-201.pdf" },
                    { number: 6, title: "Bhakti-Sufi Traditions", pdfUrl: "/pdfs/class-12/history/themes-in-indian-history-part-ii/chapter-202.pdf" },
                    { number: 7, title: "An Imperial Capital: Vijayanagara", pdfUrl: "/pdfs/class-12/history/themes-in-indian-history-part-ii/chapter-203.pdf" },
                    { number: 8, title: "Peasants, Zamindars and the State", pdfUrl: "/pdfs/class-12/history/themes-in-indian-history-part-ii/chapter-204.pdf" },
                    { number: 9, title: "Colonialism and the Countryside", pdfUrl: "/pdfs/class-12/history/themes-in-indian-history-part-iii/chapter-301.pdf" },
                    { number: 10, title: "Rebels and the Raj", pdfUrl: "/pdfs/class-12/history/themes-in-indian-history-part-iii/chapter-302.pdf" },
                    { number: 11, title: "Mahatma Gandhi and the Nationalist Movement", pdfUrl: "/pdfs/class-12/history/themes-in-indian-history-part-iii/chapter-303.pdf" },
                    { number: 12, title: "Framing the Constitution", pdfUrl: "/pdfs/class-12/history/themes-in-indian-history-part-iii/chapter-304.pdf" },
                ]
            },
            {
                id: "geography-legy1dd",
                name: "Geography",
                book: "Fundamentals of Human Geography",
                icon: "🌍",
                chapters: [
                    { number: 101, title: "Human Geography Nature and Scope", pdfUrl: "/pdfs/class-12/geography/fundamentals-of-human-geography/chapter-101.pdf" },
                    { number: 102, title: "The World Population Distribution, Density and Growth", pdfUrl: "/pdfs/class-12/geography/fundamentals-of-human-geography/chapter-102.pdf" },
                    { number: 103, title: "Human Development", pdfUrl: "/pdfs/class-12/geography/fundamentals-of-human-geography/chapter-103.pdf" },
                    { number: 104, title: "Primary Activities", pdfUrl: "/pdfs/class-12/geography/fundamentals-of-human-geography/chapter-104.pdf" },
                    { number: 105, title: "Secondary Activities", pdfUrl: "/pdfs/class-12/geography/fundamentals-of-human-geography/chapter-105.pdf" },
                    { number: 106, title: "Tertiary and Quaternary Activities", pdfUrl: "/pdfs/class-12/geography/fundamentals-of-human-geography/chapter-106.pdf" },
                    { number: 107, title: "Transport and Communication", pdfUrl: "/pdfs/class-12/geography/fundamentals-of-human-geography/chapter-107.pdf" },
                    { number: 108, title: "International Trade", pdfUrl: "/pdfs/class-12/geography/fundamentals-of-human-geography/chapter-108.pdf" },
                ]
            },
            {
                id: "geography-legy3dd",
                name: "Geography",
                book: "Practical Work in Geography Part II",
                icon: "🌍",
                chapters: [
                    { number: 301, title: "Data - Its Source and Compilation", pdfUrl: "/pdfs/class-12/geography/practical-work-in-geography-part-ii/chapter-301.pdf" },
                    { number: 302, title: "Data Processing", pdfUrl: "/pdfs/class-12/geography/practical-work-in-geography-part-ii/chapter-302.pdf" },
                    { number: 303, title: "Graphical Representation of Data", pdfUrl: "/pdfs/class-12/geography/practical-work-in-geography-part-ii/chapter-303.pdf" },
                    { number: 304, title: "Use of Computer in Data Processing and Mapping", pdfUrl: "/pdfs/class-12/geography/practical-work-in-geography-part-ii/chapter-304.pdf" },
                ]
            },
            {
                id: "psychology-lepy1dd",
                name: "Psychology",
                book: "Psychology",
                icon: "🧠",
                chapters: [
                    { number: 101, title: "Variations in Psychological Attributes", pdfUrl: "/pdfs/class-12/psychology/psychology/chapter-101.pdf" },
                    { number: 102, title: "Self and Personality", pdfUrl: "/pdfs/class-12/psychology/psychology/chapter-102.pdf" },
                    { number: 103, title: "Meeting Life Challenges", pdfUrl: "/pdfs/class-12/psychology/psychology/chapter-103.pdf" },
                    { number: 104, title: "Psychological Disorders", pdfUrl: "/pdfs/class-12/psychology/psychology/chapter-104.pdf" },
                    { number: 105, title: "Therapeutic Approaches", pdfUrl: "/pdfs/class-12/psychology/psychology/chapter-105.pdf" },
                    { number: 106, title: "Attitude and Social Cognition", pdfUrl: "/pdfs/class-12/psychology/psychology/chapter-106.pdf" },
                    { number: 107, title: "Social Influence and Group Processes", pdfUrl: "/pdfs/class-12/psychology/psychology/chapter-107.pdf" },
                ]
            },
            {
                id: "sociology-lesy1dd",
                name: "Sociology",
                book: "Indian Society",
                icon: "🧑‍🤝‍🧑",
                chapters: [
                    { number: 101, title: "Introducing Indian Society", pdfUrl: "/pdfs/class-12/sociology/indian-society/chapter-101.pdf" },
                    { number: 102, title: "The Demographic Structure of the Indian Society", pdfUrl: "/pdfs/class-12/sociology/indian-society/chapter-102.pdf" },
                    { number: 103, title: "Social Institutions: Continuity and Change", pdfUrl: "/pdfs/class-12/sociology/indian-society/chapter-103.pdf" },
                    { number: 104, title: "The Market as a Social Institution", pdfUrl: "/pdfs/class-12/sociology/indian-society/chapter-104.pdf" },
                    { number: 105, title: "Patterns of Social Inequality and Exclusion", pdfUrl: "/pdfs/class-12/sociology/indian-society/chapter-105.pdf" },
                    { number: 106, title: "The Challenges of Cultural Diversity", pdfUrl: "/pdfs/class-12/sociology/indian-society/chapter-106.pdf" },
                    { number: 107, title: "Chapter 107", pdfUrl: "/pdfs/class-12/sociology/indian-society/chapter-107.pdf" },
                ]
            },
            {
                id: "sociology-lesy2dd",
                name: "Sociology",
                book: "Social Change and Development in India",
                icon: "🧑‍🤝‍🧑",
                chapters: [
                    { number: 201, title: "Structural Change", pdfUrl: "/pdfs/class-12/sociology/social-change-and-development-in-india/chapter-201.pdf" },
                    { number: 202, title: "Cultural Change", pdfUrl: "/pdfs/class-12/sociology/social-change-and-development-in-india/chapter-202.pdf" },
                    { number: 203, title: "The Story of Indian Democracy", pdfUrl: "/pdfs/class-12/sociology/social-change-and-development-in-india/chapter-203.pdf" },
                    { number: 204, title: "Change and Development in Rural Society", pdfUrl: "/pdfs/class-12/sociology/social-change-and-development-in-india/chapter-204.pdf" },
                    { number: 205, title: "Change and Development in Industrial Society", pdfUrl: "/pdfs/class-12/sociology/social-change-and-development-in-india/chapter-205.pdf" },
                    { number: 206, title: "Social Movements", pdfUrl: "/pdfs/class-12/sociology/social-change-and-development-in-india/chapter-206.pdf" },
                    { number: 207, title: "Chapter 207", pdfUrl: "/pdfs/class-12/sociology/social-change-and-development-in-india/chapter-207.pdf" },
                    { number: 208, title: "Chapter 208", pdfUrl: "/pdfs/class-12/sociology/social-change-and-development-in-india/chapter-208.pdf" },
                ]
            },
            {
                id: "political-science-leps1dd",
                name: "Political Science",
                book: "Contemporary World Politics",
                icon: "🗳️",
                chapters: [
                    { number: 101, title: "The End of Bipolarity", pdfUrl: "/pdfs/class-12/political-science/contemporary-world-politics/chapter-101.pdf" },
                    { number: 102, title: "Contemporary Centres of Power", pdfUrl: "/pdfs/class-12/political-science/contemporary-world-politics/chapter-102.pdf" },
                    { number: 103, title: "Contemporary South Asia", pdfUrl: "/pdfs/class-12/political-science/contemporary-world-politics/chapter-103.pdf" },
                    { number: 104, title: "International Organisations", pdfUrl: "/pdfs/class-12/political-science/contemporary-world-politics/chapter-104.pdf" },
                    { number: 105, title: "Security in the Contemporary World", pdfUrl: "/pdfs/class-12/political-science/contemporary-world-politics/chapter-105.pdf" },
                    { number: 106, title: "Environment and Natural Resources", pdfUrl: "/pdfs/class-12/political-science/contemporary-world-politics/chapter-106.pdf" },
                    { number: 107, title: "Globalisation", pdfUrl: "/pdfs/class-12/political-science/contemporary-world-politics/chapter-107.pdf" }
                ]
            },
            {
                id: "political-science-leps2dd",
                name: "Political Science",
                book: "Politics in India Since Independence",
                icon: "🗳️",
                chapters: [
                    { number: 201, title: "Challenges of Nation Building", pdfUrl: "/pdfs/class-12/political-science/politics-in-india-since-independence/chapter-201.pdf" },
                    { number: 202, title: "Era of One-party Dominance", pdfUrl: "/pdfs/class-12/political-science/politics-in-india-since-independence/chapter-202.pdf" },
                    { number: 203, title: "Politics of Planned Development", pdfUrl: "/pdfs/class-12/political-science/politics-in-india-since-independence/chapter-203.pdf" },
                    { number: 204, title: "India's External Relations", pdfUrl: "/pdfs/class-12/political-science/politics-in-india-since-independence/chapter-204.pdf" },
                    { number: 205, title: "Challenges to and Restoration of the Congress System", pdfUrl: "/pdfs/class-12/political-science/politics-in-india-since-independence/chapter-205.pdf" },
                    { number: 206, title: "The Crisis of Democratic Order", pdfUrl: "/pdfs/class-12/political-science/politics-in-india-since-independence/chapter-206.pdf" },
                    { number: 207, title: "Regional Aspirations", pdfUrl: "/pdfs/class-12/political-science/politics-in-india-since-independence/chapter-207.pdf" },
                    { number: 208, title: "Recent Developments in Indian Politics", pdfUrl: "/pdfs/class-12/political-science/politics-in-india-since-independence/chapter-208.pdf" }
                ]
            },
            {
                id: "economics-leec1dd",
                name: "Economics",
                book: "Introductory Macroeconomics",
                icon: "📈",
                chapters: [
                    { number: 101, title: "Introduction", pdfUrl: "/pdfs/class-12/economics/introductory-macroeconomics/chapter-101.pdf" },
                    { number: 102, title: "National Income Accounting", pdfUrl: "/pdfs/class-12/economics/introductory-macroeconomics/chapter-102.pdf" },
                    { number: 103, title: "Money and Banking", pdfUrl: "/pdfs/class-12/economics/introductory-macroeconomics/chapter-103.pdf" },
                    { number: 104, title: "Determination of Income and Employment", pdfUrl: "/pdfs/class-12/economics/introductory-macroeconomics/chapter-104.pdf" },
                    { number: 105, title: "Government Budget and the Economy", pdfUrl: "/pdfs/class-12/economics/introductory-macroeconomics/chapter-105.pdf" },
                    { number: 106, title: "Open Economy Macroeconomics", pdfUrl: "/pdfs/class-12/economics/introductory-macroeconomics/chapter-106.pdf" },
                ]
            },
            {
                id: "economics-leec2dd",
                name: "Economics",
                book: "Indian Economic Development",
                icon: "📈",
                chapters: [
                    { number: 201, title: "Indian Economy on the Eve of Independence", pdfUrl: "/pdfs/class-12/economics/indian-economic-development/chapter-201.pdf" },
                    { number: 202, title: "Indian Economy 1950-1990", pdfUrl: "/pdfs/class-12/economics/indian-economic-development/chapter-202.pdf" },
                    { number: 203, title: "Liberalisation, Privatisation and Globalisation : An Appraisal", pdfUrl: "/pdfs/class-12/economics/indian-economic-development/chapter-203.pdf" },
                    { number: 204, title: "Human Capital Formation in India", pdfUrl: "/pdfs/class-12/economics/indian-economic-development/chapter-204.pdf" },
                    { number: 205, title: "Rural Development", pdfUrl: "/pdfs/class-12/economics/indian-economic-development/chapter-205.pdf" },
                ]
            },
            {
                id: "business-studies",
                name: "Business Studies",
                book: "Business Studies",
                icon: "💼",
                chapters: [
                    { number: 1, title: "Nature and Significance of Management", pdfUrl: "/pdfs/class-12/business-studies/business-studies/chapter-1.pdf" },
                    { number: 2, title: "Principles of Management", pdfUrl: "/pdfs/class-12/business-studies/business-studies/chapter-2.pdf" },
                    { number: 3, title: "Business Environment", pdfUrl: "/pdfs/class-12/business-studies/business-studies/chapter-3.pdf" },
                    { number: 4, title: "Planning", pdfUrl: "/pdfs/class-12/business-studies/business-studies/chapter-4.pdf" },
                    { number: 5, title: "Organising", pdfUrl: "/pdfs/class-12/business-studies/business-studies/chapter-5.pdf" },
                    { number: 6, title: "Staffing", pdfUrl: "/pdfs/class-12/business-studies/business-studies/chapter-6.pdf" },
                    { number: 7, title: "Directing", pdfUrl: "/pdfs/class-12/business-studies/business-studies/chapter-7.pdf" },
                    { number: 8, title: "Controlling", pdfUrl: "/pdfs/class-12/business-studies/business-studies/chapter-8.pdf" },
                    { number: 9, title: "Financial Management", pdfUrl: "/pdfs/class-12/business-studies/business-studies/chapter-9.pdf" },
                    { number: 10, title: "Financial Markets", pdfUrl: "/pdfs/class-12/business-studies/business-studies/chapter-10.pdf" },
                    { number: 11, title: "Marketing", pdfUrl: "/pdfs/class-12/business-studies/business-studies/chapter-11.pdf" },
                ]
            },
            {
                id: "fine-arts-lefa1dd",
                name: "Fine Arts",
                book: "An Introduction to Indian Art Part II",
                icon: "🎨",
                chapters: [
                    { number: 101, title: "The Manuscript Painting Tradition", pdfUrl: "/pdfs/class-12/fine-arts/an-introduction-to-indian-art-part-ii/chapter-101.pdf" },
                    { number: 102, title: "The Rajasthani School of Painting", pdfUrl: "/pdfs/class-12/fine-arts/an-introduction-to-indian-art-part-ii/chapter-102.pdf" },
                    { number: 103, title: "The Mughal School of Miniature Painting", pdfUrl: "/pdfs/class-12/fine-arts/an-introduction-to-indian-art-part-ii/chapter-103.pdf" },
                    { number: 104, title: "The Deccani Schools of Painting", pdfUrl: "/pdfs/class-12/fine-arts/an-introduction-to-indian-art-part-ii/chapter-104.pdf" },
                    { number: 105, title: "The Pahari School of Miniature Painting", pdfUrl: "/pdfs/class-12/fine-arts/an-introduction-to-indian-art-part-ii/chapter-105.pdf" },
                    { number: 106, title: "The Bengal School of Painting", pdfUrl: "/pdfs/class-12/fine-arts/an-introduction-to-indian-art-part-ii/chapter-106.pdf" },
                    { number: 107, title: "The Modern Indian Art", pdfUrl: "/pdfs/class-12/fine-arts/an-introduction-to-indian-art-part-ii/chapter-107.pdf" },
                    { number: 108, title: "The Living Art Traditions of India", pdfUrl: "/pdfs/class-12/fine-arts/an-introduction-to-indian-art-part-ii/chapter-108.pdf" },
                ]
            },
            {
                id: "informatics-practices-leip1dd",
                name: "Informatics Practices",
                book: "Informatics Practices",
                icon: "💻",
                chapters: [
                    { number: 101, title: "Querying and SQL Functions", pdfUrl: "/pdfs/class-12/informatics-practices/informatics-practices/chapter-101.pdf" },
                    { number: 102, title: "Data Handling using Pandas - I", pdfUrl: "/pdfs/class-12/informatics-practices/informatics-practices/chapter-102.pdf" },
                    { number: 103, title: "Data Handling using Pandas - II", pdfUrl: "/pdfs/class-12/informatics-practices/informatics-practices/chapter-103.pdf" },
                    { number: 104, title: "Plotting Data using Matplotlib", pdfUrl: "/pdfs/class-12/informatics-practices/informatics-practices/chapter-104.pdf" },
                    { number: 105, title: "Internet and Web", pdfUrl: "/pdfs/class-12/informatics-practices/informatics-practices/chapter-105.pdf" },
                    { number: 106, title: "Societal Impacts", pdfUrl: "/pdfs/class-12/informatics-practices/informatics-practices/chapter-106.pdf" },
                    { number: 107, title: "Project Based Learning", pdfUrl: "/pdfs/class-12/informatics-practices/informatics-practices/chapter-107.pdf" },
                ]
            }
        ]
    }
];


// Helper function to get class by ID
export function getClassById(id: number): ClassData | undefined {
    return classes.find(c => c.id === id);
}

// Helper function to get subject
export function getSubject(classId: number, subjectId: string): Subject | undefined {
    const classData = getClassById(classId);
    return classData?.subjects.find(s => s.id === subjectId);
}

// Search function for chapters
export interface SearchResult {
    classId: number;
    className: string;
    subjectId: string;
    subjectName: string;
    chapter: Chapter;
}

export function searchChapters(query: string): SearchResult[] {
    if (!query || query.length < 2) return [];

    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    for (const classData of classes) {
        // Optimization: Check if class matches query
        const classMatch = classData.name.toLowerCase().includes(lowerQuery);

        for (const subject of classData.subjects) {
            // Optimization: Check if subject matches query
            const subjectMatch = subject.name.toLowerCase().includes(lowerQuery);

            for (const chapter of subject.chapters) {
                // Return result if:
                // 1. Chapter title matches
                // 2. Subject name matches
                // 3. Class name matches
                if (
                    chapter.title.toLowerCase().includes(lowerQuery) ||
                    subjectMatch ||
                    classMatch
                ) {
                    results.push({
                        classId: classData.id,
                        className: classData.name,
                        subjectId: subject.id,
                        subjectName: subject.name,
                        chapter: chapter
                    });
                }
            }
        }
    }

    return results.slice(0, 10); // Limit to 10 results
}