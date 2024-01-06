import { Platform } from "../components/components/atoms/DropdownPicker"

const details = [
  {
    "Product Name": "Versatile Multi-Tool Set",
    "Brand": "All-in-One Tools",
    "Category": "Hand Tools",
    "Material": "Stainless Steel",
    "Features": ["Screwdriver", "Pliers", "Knife", "Bottle Opener"],
    "Color Options": ["Red", "Blue", "Black"],
    "Price": "$24.99",
    "Customer Ratings": 4.6,
    "Number of Reviews": 150,
    "Manufacturer": "All-in-One Tools Co.",
    "Additional Notes": "A handy multi-tool set for various tasks, combining functionality and durability in one compact design."
  },
]

const languages = [
  {
    "name": "English 🇺🇸"
  },
  {
    "name": "Spanish 🇪🇸"
  },
  {
    "name": "French 🇫🇷"
  },
  {
    "name": "German 🇩🇪"
  },
  {
    "name": "Italian 🇮🇹"
  },
  {
    "name": "Portuguese 🇵🇹"
  },
  {
    "name": "Dutch 🇳🇱"
  },
  {
    "name": "Russian 🇷🇺"
  },
  {
    "name": "Chinese (Simplified) 🇷🇺"
  },
  {
    "name": "Chinese (Traditional) 🇹🇼"
  },
  {
    "name": "Japanese 🇯🇵"
  },
  {
    "name": "Korean 🇰🇷"
  },
  {
    "name": "Arabic 🇦🇪"
  },
  {
    "name": "Hindi 🇮🇳"
  },
  {
    "name": "Turkish 🇹🇷"
  },
  {
    "name": "Swedish 🇸🇪"
  }
]

const platforms: Platform[]  =  [
    {"name": "Google AdSense", "words": 50},
    {"name": "Facebook Ads", "words": 40},
    {"name": "Amazon Advertising", "words": 45},
    {"name": "AdMob (by Google)", "words": 40},
    {"name": "Media.net", "words": 40},
    {"name": "Taboola", "words": 45},
    {"name": "Outbrain", "words": 45},
    {"name": "LinkedIn Ads", "words": 40},
    {"name": "Twitter Ads", "words": 40},
    {"name": "Pinterest Ads", "words": 45},
    {"name": "Instagram Ads", "words": 45},
    {"name": "Snapchat Ads", "words": 45},
    {"name": "Microsoft Advertising (formerly Bing Ads)", "words": 45},
    {"name": "Reddit Ads", "words": 45},
    {"name": "Quora Ads", "words": 45},
    {"name": "TikTok Ads", "words": 45},
    {"name": "Spotify Ad Studio", "words": 45},
    {"name": "AdRoll", "words": 40},
    {"name": "BuySellAds", "words": 40},
    {"name": "Revcontent", "words": 45},
    {"name": "TripleLift", "words": 45},
    {"name": "Yelp Ads", "words": 40},
    {"name": "InMobi", "words": 40},
    {"name": "SmartyAds", "words": 45},
    {"name": "Adcash", "words": 40},
    {"name": "Smaato", "words": 40},
    {"name": "Epom", "words": 40},
    {"name": "PropellerAds", "words": 40},
    {"name": "MGID", "words": 45},
    {"name": "AdBlade", "words": 40},
    {"name": "Criteo", "words": 45},
    {"name": "Adform", "words": 40},
    {"name": "Adobe Advertising Cloud", "words": 45},
    {"name": "Verizon Media (formerly Oath)", "words": 45},
    {"name": "Adelphic", "words": 40},
    {"name": "AdRoll", "words": 40},
    {"name": "Quantcast", "words": 40},
    {"name": "Pandora Ads", "words": 45},
    {"name": "Adelphic", "words": 40},
    {"name": "Bidtellect", "words": 45},
    {"name": "Adyoulike", "words": 40},
    {"name": "Adknowledge", "words": 40},
    {"name": "Conversant", "words": 40},
    {"name": "IronSource", "words": 40},
    {"name": "Vungle", "words": 45},
    {"name": "Unity Ads", "words": 45},
    {"name": "Chartboost", "words": 45},
    {"name": "Adcash", "words": 40},
    {"name": "SpotX", "words": 45},
    {"name": "OpenX", "words": 40}
  ]


const jsonData =  {
  "categories": [
    {
      "id": 1,
      "name": "Electronics",
      "subcategories": [
        {
          "id": 101,
          "details": [
            {
              "Model": "ABC123",
              "Color Options": ["Black", "Silver", "Blue"],
              "Condition": "New/Refurbished",
              "Performance": "Octa-core, 6GB RAM",
              "GPU": "Adreno 650",
              "Camera": "48MP Main, 16MP Ultra-Wide, Night Mode",
              "Front Camera": "20MP, Portrait Mode",
              "Video Recording": "4K at 30fps",
              "Battery": "4000mAh, Fast Charging (30W)",
              "Display": "AMOLED, Full HD+, 6.4 inches",
              "Display Features": ["HDR10", "Gorilla Glass 6"],
              "Design": "Slim, Aluminum Body",
              "Build": "IP68 Water and Dust Resistance",
              "Operating System": "Android 11",
              "User Interface": "Custom UI XYZ",
              "Storage": "128GB Internal, Expandable up to 256GB",
              "Connectivity": ["5G", "Wi-Fi 6", "Bluetooth 5.1", "NFC"],
              "Security": ["Fingerprint Sensor", "Face Recognition"],
              "Additional Features": ["Wireless Charging", "Reverse Charging"],
              "Audio": ["Stereo Speakers", "3.5mm Audio Jack"],
              "Sensors": ["Accelerometer", "Gyro", "Compass"],
              "Updates": "Regular Software Updates",
              "Dimensions": "158.9 x 73.6 x 8.4 mm",
              "Weight": "185g",
              "Price": "Competitive Pricing"
            }
          ],
          "name": "Smartphones",
          "subcategories": [
            "iPhone",
            "Samsung Galaxy",
            "Google Pixel",
            "OnePlus",
            "Xiaomi",
            "Huawei",
            "Sony Xperia",
            "LG",
            "Oppo",
            "Vivo",
            "Realme",
            "Motorola",
            "Asus ROG",
            "Lenovo Legion",
            "ZTE Axon"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 102,
          "name": "Laptops",
          "details": [
            {
              "Model": "XYZ456",
              "Color Options": ["Silver", "Space Gray"],
              "Condition": "New",
              "Processor": "Intel Core i7-10th Gen",
              "RAM": "16GB DDR4",
              "Storage": "512GB SSD",
              "Graphics": "NVIDIA GeForce GTX 1650",
              "Display": "15.6 inches, Full HD, IPS",
              "Operating System": "Windows 10",
              "Build": "Aluminum Body",
              "Weight": "1.8kg",
              "Battery Life": "Up to 10 hours",
              "Connectivity": ["Wi-Fi 6", "Bluetooth 5.0", "USB-C", "HDMI"],
              "Keyboard": "Backlit, Spill-resistant",
              "Webcam": "HD Webcam with Privacy Shutter",
              "Audio": ["Dolby Atmos Speakers", "3.5mm Audio Jack"],
              "Security": ["Fingerprint Reader", "TPM 2.0"],
              "Ports": ["USB 3.1", "USB 2.0", "SD Card Reader"],
              "Additional Features": ["Thin Bezels", "Fast Charging"],
              "Warranty": "1 Year",
              "Price": "$1,299"
            }
          ],
          "subcategories": [
            "Dell",
            "MacBook",
            "HP",
            "Lenovo",
            "Asus",
            "Microsoft",
            "Acer",
            "LG",
            "Razer",
            "MSI",
            "Alienware",
            "ASUS",
            "LG",
            "Lenovo",
            "Huawei"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 103,
          "name": "Tablets",
          "details": [
            {
              "Model": "TabX",
              "Color Options": ["Black", "Silver", "Gold"],
              "Condition": "New",
              "Display Size": "10.1 inches, IPS LCD",
              "Resolution": "1920 x 1200 pixels",
              "Processor": "Octa-core, 2.0 GHz",
              "RAM": "4GB",
              "Storage": "64GB, Expandable up to 256GB",
              "Operating System": "Android 11",
              "Battery Capacity": "6000mAh",
              "Camera": "Main: 8MP, Front: 5MP",
              "Connectivity": ["Wi-Fi 6", "Bluetooth 5.2", "USB-C"],
              "Build": "Metal Unibody",
              "Weight": "500g",
              "Dimensions": "245 x 160 x 7.5 mm",
              "Audio": ["Stereo Speakers", "3.5mm Audio Jack"],
              "Sensors": ["Accelerometer", "Gyroscope"],
              "Security": ["Fingerprint Sensor", "Face Unlock"],
              "Additional Features": ["Stylus Support", "Split-screen Multitasking"],
              "Warranty": "2 Years",
              "Price": "$299"
            }
          ],
          "subcategories": [
            "iPad",
            "Samsung Galaxy Tab",
            "Microsoft Surface Pro",
            "Amazon",
            "Huawei",
            "Lenovo Tab",
            "ASUS",
            "Google Pixel",
            "Sony Xperia Tablet",
            "LG",
            "Acer",
            "Xiaomi Mi Pad",
            "Nvidia Shield Tablet",
            "Dragon Touch",
            "Teclast Tablet"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 104,
          "details": [
            {
              "Model": "Captura-5000",
              "Color Options": ["Black", "Silver"],
              "Condition": "New",
              "Sensor Type": "Full-frame CMOS",
              "Megapixels": "24.2MP",
              "ISO Range": "100-25600",
              "Lens Mount": "Canon EF",
              "Image Processor": "DIGIC X",
              "Viewfinder Type": "Electronic OLED",
              "LCD Screen": "3.2 inches, Vari-angle Touchscreen",
              "Video Recording": "4K at 30fps",
              "Autofocus Points": "Dual Pixel CMOS AF, 155 points",
              "Continuous Shooting": "Up to 12 fps",
              "Connectivity": ["Wi-Fi", "Bluetooth 5.0", "USB-C", "HDMI"],
              "Build": "Magnesium Alloy Body",
              "Weather Sealing": "Yes",
              "Weight": "800g (Body Only)",
              "Dimensions": "150 x 116 x 75 mm",
              "Battery Life": "Up to 800 shots (CIPA)",
              "Storage Media": "Dual SD/SDHC/SDXC",
              "In-body Stabilization": "Yes",
              "Additional Features": ["Time-lapse", "Focus Peaking"],
              "Warranty": "1 Year",
              "Price": "$2,499"
            }
          ],
          "name": "Cameras",
          "subcategories": [
            "Canon",
            "Nikon",
            "Sony Alpha",
            "Fujifilm",
            "Panasonic Lumix",
            "Olympus OM-D",
            "Leica",
            "Pentax",
            "GoPro",
            "DJI",
            "Blackmagic Design",
            "Hasselblad",
            "Ricoh Theta",
            "Insta360",
            "Lomography"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 105,
          "name": "TVs",
          "details": [
            {
              "Model": "UltraView 5000",
              "Color Options": ["Black", "Silver"],
              "Screen Size": "55 inches",
              "Display Technology": "4K UHD LED",
              "Resolution": "3840 x 2160 pixels",
              "HDR Support": "Dolby Vision, HDR10+",
              "Refresh Rate": "120Hz",
              "Smart TV Platform": "Android TV 10",
              "Processor": "Quad-core",
              "RAM": "3GB",
              "Storage": "32GB",
              "Sound System": "Dolby Atmos, DTS:X",
              "Number of HDMI Ports": 4,
              "Number of USB Ports": 3,
              "Connectivity": ["Wi-Fi 6", "Bluetooth 5.0", "Ethernet"],
              "Voice Control": "Built-in Google Assistant, Alexa",
              "Built-in Apps": ["Netflix", "YouTube", "Prime Video"],
              "Gaming Features": ["Auto Low Latency Mode (ALLM)", "Variable Refresh Rate (VRR)"],
              "Design": "Slim Bezel, Wall-Mountable",
              "Weight": "20.5kg",
              "Dimensions": "1230 x 710 x 85 mm",
              "Energy Efficiency Rating": "A+",
              "Warranty": "2 Years",
              "Price": "$899"
            }
          ],
          "subcategories": [
            "Samsung",
            "LG",
            "Sony",
            "Panasonic",
            "TCL",
            "Vizio",
            "Hisense",
            "Sharp Aquos",
            "Philips",
            "Insignia",
            "Sceptre",
            "Element",
            "Haier",
            "RCA",
            "Westinghouse"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 106,
          "details": [
            {
              "Model": "SonicX-500",
              "Color Options": ["Black", "Silver", "Rose Gold"],
              "Type": "Over-Ear",
              "Wireless Technology": "Bluetooth 5.0",
              "Noise Cancellation": "Active Noise Cancelling (ANC)",
              "Driver Size": "40mm",
              "Frequency Response": "20Hz - 20kHz",
              "Impedance": "32 Ohms",
              "Sensitivity": "105dB",
              "Battery Life": "Up to 30 hours (with ANC)",
              "Charging Time": "2 hours",
              "Microphone": "Built-in, Noise-Canceling",
              "Controls": "Touch Controls for Play/Pause, Volume, Calls",
              "Foldable Design": "Yes",
              "Materials": "Premium Leather, Aluminum",
              "Comfort Features": "Memory Foam Ear Cushions, Adjustable Headband",
              "Compatibility": "Bluetooth-enabled devices, 3.5mm Audio Jack",
              "Carry Case": "Included",
              "Weight": "280g",
              "Dimensions": "190 x 170 x 80 mm",
              "Accessories": ["Audio Cable", "USB Charging Cable"],
              "Warranty": "1 Year",
              "Price": "$199"
            }
          ],
          "name": "Headphones",
          "subcategories": [
            "Sony",
            "Bose",
            "Apple",
            "Sennheiser",
            "Beats",
            "JBL",
            "Audio-Technica",
            "Skullcandy",
            "Beyerdynamic",
            "SteelSeries",
            "Razer",
            "AKG ",
            "HyperX",
            "Shure",
            "Logitech"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 107,
          "details": [
            {
              "Model": "PS5",
              "Color Options": ["Jet Black", "Glacier White"],
              "Type": "Home Console",
              "Processor": "Custom AMD Ryzen Zen 2, 8-core",
              "GPU": "Custom AMD RDNA 2, 10.28 TFLOPs",
              "RAM": "16GB GDDR6",
              "Storage": "825GB NVMe SSD",
              "Disc Drive": "Ultra HD Blu-ray, 4K Streaming",
              "Resolution": "Up to 8K",
              "Frame Rate": "Up to 120fps",
              "Ray Tracing": "Yes",
              "Backward Compatibility": "Yes (PS4 Games)",
              "Online Services": "PlayStation Plus",
              "Controller": "DualSense Wireless Controller",
              "Connectivity": ["Wi-Fi 6", "Bluetooth 5.1", "USB-C", "HDMI"],
              "Audio": "Tempest 3D AudioTech",
              "Storage Expansion": "NVMe SSD Slot",
              "Dimensions": "390 x 104 x 260 mm",
              "Weight": "4.5kg",
              "Additional Features": ["Adaptive Triggers", "Haptic Feedback"],
              "Included Accessories": ["DualSense Controller", "HDMI Cable", "Power Cable"],
              "Warranty": "1 Year",
              "Price": "$499"
            }
          ],
          "name": "Gaming Consoles",
          "subcategories": [
            "PlayStation",
            "Xbox",
            "Nintendo Switch",
            "PC Gaming",
            "PlayStation Portable",
            "Sega Genesis",
            "Super Nintendo",
            "Atari",
            "Neo Geo",
            "Oculus Quest",
            "Steam Deck",
            "Game Boy",
            "Sony PSP",
            "Xbox Series",
            "Nintendo 3DS"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 108,
          "details": [
            {
              "Model": "SmartPro 5000",
              "Color Options": ["Black", "Silver", "Rose Gold"],
              "Display": "AMOLED, 1.4 inches, Touchscreen",
              "Resolution": "360 x 360 pixels",
              "Operating System": "Wear OS by Google",
              "Processor": "Quad-core, 1.2GHz",
              "RAM": "1GB",
              "Storage": "8GB",
              "Connectivity": ["Bluetooth 5.0", "Wi-Fi"],
              "Sensors": ["Heart Rate Monitor", "GPS", "Accelerometer", "Gyroscope"],
              "Water Resistance": "IP68",
              "Battery Life": "Up to 5 days",
              "Charging Time": "2 hours",
              "Compatibility": "Android (5.0 and above), iOS (10.0 and above)",
              "Strap Material": "Silicone",
              "Strap Size": "22mm",
              "Watch Face Size": "42mm",
              "Fitness Tracking": ["Steps", "Calories", "Sleep", "Workouts"],
              "Notifications": "Call, Message, App Alerts",
              "Voice Assistant": "Google Assistant",
              "Built-in GPS": "Yes",
              "Music Control": "Yes",
              "Payments": "Google Pay",
              "Design": "Round, Stainless Steel Casing",
              "Weight": "45g",
              "Dimensions": "45 x 45 x 10 mm",
              "Warranty": "2 Years",
              "Price": "$249"
            }
          ],
          "name": "Smartwatches",
          "subcategories": [
            "Apple Watch",
            "Samsung Galaxy Watch",
            "Fitbit Versa",
            "Garmin Forerunner",
            "Fossil Gen",
            "Huawei Watch",
            "Amazfit Bip",
            "TicWatch Pro",
            "Withings Steel",
            "Suunto Spartan",
            "Polar Vantage",
            "Xiaomi Mi Watch",
            "Casio G-Shock",
            "Garmin Fenix",
            "Sony SmartWatch"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 109,
          "name": "Home Appliances",
          "details": [
            {
              "Model": "ApplianceMaster 9000",
              "Color Options": ["White", "Stainless Steel", "Black"],
              "Type": "Refrigerator",
              "Capacity": "French Door, 26 cubic feet",
              "Energy Efficiency": "Energy Star Certified",
              "Temperature Control": "Smart Cooling Plus",
              "Ice and Water Dispenser": "Yes, External",
              "Number of Shelves": 4, 
              "Freezer Type": "Bottom Freezer",
              "Special Features": ["Door-in-Door", "SmartThinQ Technology"],
              "Interior Lighting": "LED",
              "Smart Home Integration": ["Amazon Alexa", "Google Assistant"],
              "Dimensions": "35.75 x 68.375 x 34.25 inches",
              "Weight": "300 lbs",
              "Warranty": "1 Year",
              "Price": "$1,999"
            }],
          "subcategories": [
            "Refrigerator",
            "Washing Machine",
            "Oven",
            "Vacuum",
            "Robot Vacuum",
            "Thermostat",
            "Air Purifier",
            "KitchenAid Mixer",
            "Instant Pot",
            "Blender",
            "Braava",
            "Humidifier",
            "Dishwasher",
            "Coffee Maker",
            "Steam Mop"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 110,
          "name": "Printers",
          "details": [
            {
              "Model": "LaserPro 6000",
              "Color Options": ["White", "Black"],
              "Type": "LaserJet Printer",
              "Printing Technology": "Laser",
              "Print Speed": "30 pages per minute",
              "Resolution": "1200 x 1200 dpi",
              "Paper Capacity": "250 sheets",
              "Duplex Printing": "Yes",
              "Wireless Printing": "Yes, Wi-Fi Direct",
              "Mobile Printing": ["HP ePrint", "Apple AirPrint"],
              "Connectivity": ["USB 2.0", "Ethernet"],
              "Display": "2.7-inch Color Touchscreen",
              "Supported Media Sizes": ["Letter", "Legal", "A4", "Envelopes"],
              "Monthly Duty Cycle": "Up to 30,000 pages",
              "Operating Noise Level": "50 dB",
              "Dimensions": "15 x 18 x 10 inches",
              "Weight": "20 lbs",
              "Warranty": "1 Year",
              "Price": "$299"
            }],
          "subcategories": [
            "HP",
            "Epson",
            "Canon",
            "Brother",
            "Xerox",
            "Dell",
            "Samsung",
            "Lexmark",
            "Ricoh",
            "Konicab",
            "Zebra",
            "Epson",
            "Canon",
            "Dymo"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 2,
      "name": "Fashion",
      "subcategories": [
        {
          "id": 201,
          "name": "Clothing",
          "details": [
            {
              "Brand": "FashionElegance",
              "Type": "Dress",
              "Style": "A-Line",
              "Color Options": ["Red", "Navy Blue", "Black"],
              "Material": "Polyester",
              "Size Options": ["XS", "S", "M", "L", "XL"],
              "Neckline": "V-Neck",
              "Sleeve Type": "Short Sleeves",
              "Dress Length": "Knee-Length",
              "Pattern": "Floral Print",
              "Occasion": ["Casual", "Party"],
              "Closure": "Zipper",
              "Condition": "New with Tags",
              "Washing Instructions": "Machine Washable",
              "Price": "$49.99",
              "Features": ["Comfortable Fit", "Fashionable Design"],
              "Manufacturer Warranty": "1 Year",
              "Return Policy": "30 Days",
              "Shipping Method": "Standard",
              "Model Number": "FE-1234",
              "Product Dimensions": "36 x 24 x 2 inches",
              "Weight": "0.5 lbs",
              "Material Care": "Gentle cycle with cold water, Do not bleach, Hang to dry"
            }
          ],      
          "subcategories": [
            "T-Shirts",
            "Dresses",
            "Jeans",
            "Sweaters",
            "Jackets",
            "Pants",
            "Skirts",
            "Blouses",
            "Suits",
            "Shorts",
            "Activewear",
            "Underwear",
            "Swimwear",
            "Outerwear",
            "Pajamas"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 202,
          "name": "Shoes",
          "details": [
            {
              "Brand": "StepStyle",
              "Type": "Running Shoes",
              "Style": "Athletic",
              "Color Options": ["Black", "White", "Blue"],
              "Material": "Mesh, Rubber Sole",
              "Size Options": ["US 6", "US 7", "US 8", "US 9", "US 10"],
              "Closure": "Lace-up",
              "Condition": "Brand New",
              "Fit": "True to Size",
              "Arch Support": "Medium",
              "Cushioning": "Responsive",
              "Usage": "Running, Jogging, Gym",
              "Price": "$79.99",
              "Features": ["Breathable", "Lightweight", "Non-slip"],
              "Manufacturer Warranty": "6 Months",
              "Return Policy": "45 Days",
              "Shipping Method": "Free Standard Shipping",
              "Model Number": "SS-123",
              "Weight": "300g (per shoe)",
              "Insole Material": "OrthoLite",
              "Outsole Material": "High-Density Rubber",
              "Sustainability": "Recyclable Packaging",
              "Water Resistance": "No",
              "Traction": "Multi-surface Tread",
              "Ankle Support": "Low",
              "Lining Material": "Moisture-Wicking Fabric",
              "Toe Style": "Round",
              "Heel Height": "Flat",
              "Season": "All Seasons"
            }
          ],          
          "subcategories": [
            "Sneakers",
            "Boots",
            "High Heels",
            "Flats",
            "Sandals",
            "Oxfords",
            "Loafers",
            "Slippers",
            "Athletic Shoes",
            "Espadrilles",
            "Mules",
            "Wedges",
            "Platform Shoes",
            "Ankle Boots",
            "Hiking Boots"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 203,
          "name": "Accessories",
          "details": [
            {
              "Brand": "AccessoChic",
              "Type": "Fashionable Watch",
              "Style": "Casual",
              "Color Options": ["Rose Gold", "Silver", "Black"],
              "Material": "Stainless Steel",
              "Size Options": ["Small", "Medium", "Large"],
              "Closure": "Adjustable Clasp",
              "Condition": "Brand New",
              "Design": "Elegant Floral Pattern",
              "Usage": "Everyday Wear",
              "Price": "$99.99",
              "Features": ["Water-Resistant", "Scratch-Proof", "Japanese Quartz Movement"],
              "Manufacturer Warranty": "2 Years",
              "Return Policy": "30 Days",
              "Shipping Method": "Express Shipping",
              "Model Number": "AC-456",
              "Weight": "100g",
              "Compatibility": "Universal",
              "Material Care": "Wipe with a Soft Cloth"
            }
          ],
          "subcategories": [
            "Handbags",
            "Wallets",
            "Backpacks",
            "Scarves",
            "Gloves",
            "Umbrellas",
            "Hats",
            "Caps",
            "Ties",
            "Bowties",
            "Suspenders",
            "Belts",
            "Socks",
            "Watches",
            "Bracelets"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 204,
          "name": "Jewelry",
          "details": [
            {
              "Brand": "GlamourGems",
              "Type": "Necklace",
              "Style": "Statement",
              "Metal": "18K Gold",
              "Gemstone": "Diamonds, Emeralds",
              "Color Options": ["Gold", "Rose Gold"],
              "Length Options": ["16 inches", "18 inches", "20 inches"],
              "Closure": "Lobster Clasp",
              "Condition": "Brand New",
              "Design": "Floral Pendant",
              "Occasion": "Formal, Special Events",
              "Price": "$1,499.99",
              "Features": ["High-Quality Craftsmanship", "Luxurious Design"],
              "Manufacturer Warranty": "Lifetime",
              "Return Policy": "45 Days",
              "Shipping Method": "Insured Priority Shipping",
              "Model Number": "GG-789",
              "Weight": "10g",
              "Certification": "Gemological Institute of America (GIA)",
              "Sustainability": "Conflict-Free Gemstones",
              "Chain Material": "14K Gold",
              "Hallmark": "Stamped 750",
              "Inscription": "Love Forever",
              "Box": "Deluxe Velvet Gift Box",
              "Engraving Options": ["Initials", "Date"],
              "Cleaning Method": "Professional Jewelry Cleaner"
            }
          ],          
          "subcategories": [
            "Rings",
            "Necklaces",
            "Earrings",
            "Bracelets",
            "Watches",
            "Anklets",
            "Brooches",
            "Pendants",
            "Cufflinks",
            "Chains",
            "Lockets",
            "Pearls",
            "Gemstones",
            "Diamonds",
            "Gold Jewelry"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 205,
          "name": "Watches",
          "details": [
            {
              "Brand": "TimeMaster",
              "Type": "Automatic Watch",
              "Style": "Classic",
              "Color Options": ["Silver", "Black", "Brown"],
              "Material": "Stainless Steel",
              "Strap Material": "Genuine Leather",
              "Movement Type": "Automatic",
              "Display": "Analog",
              "Water Resistance": "50 meters",
              "Case Diameter": "40mm",
              "Case Thickness": "12mm",
              "Closure": "Deployment Clasp",
              "Condition": "Brand New",
              "Features": ["Sapphire Crystal", "Luminous Hands", "Date Function"],
              "Manufacturer Warranty": "2 Years",
              "Return Policy": "30 Days",
              "Shipping Method": "Express Shipping",
              "Model Number": "TM-123",
              "Weight": "100g",
              "Dial Color": "White",
              "Bezel Material": "Stainless Steel",
              "Calendar": "Date at 3 o'clock",
              "Lume": "Yes",
              "Power Reserve": "Up to 40 hours",
              "Packaging": "Luxury Wooden Box",
              "Additional Complications": ["Moon Phase", "Chronograph"],
              "Strap Width": "20mm"
            }
          ],          
          "subcategories": [
            "Analog Watches",
            "Digital Watches",
            "Chronograph Watches",
            "Dress Watches",
            "Sport Watches",
            "Smartwatches",
            "Luxury Watches",
            "Fitness Trackers",
            "Pocket Watches",
            "Skeleton Watches",
            "Automatic Watches",
            "Military Watches",
            "Dive Watches",
            "Vintage Watches",
            "Designer Watches"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 206,
          "name": "Bags",
          "details": [
            {
              "Brand": "ChicCarry",
              "Type": "Handbag",
              "Style": "Tote",
              "Color Options": ["Black", "Brown", "Beige"],
              "Material": "Genuine Leather",
              "Closure": "Zipper",
              "Size": "Medium",
              "Condition": "Brand New",
              "Design": "Classic with Gold Accents",
              "Occasion": "Everyday, Formal",
              "Price": "$199.99",
              "Features": ["Spacious Interior", "Multiple Compartments", "Detachable Shoulder Strap"],
              "Manufacturer Warranty": "1 Year",
              "Return Policy": "45 Days",
              "Shipping Method": "Standard Shipping",
              "Model Number": "CC-456",
              "Weight": "800g",
              "Lining Material": "Polyester",
              "Handle Drop": "8 inches",
              "Interior Pockets": ["Zip Pocket", "Phone Pocket", "Key Holder"],
              "Exterior Pockets": ["Front Zip Pocket", "Back Slip Pocket"],
              "Logo": "Metal Logo Plate",
              "Hardware Color": "Gold",
              "Dust Bag": "Included",
              "Embellishments": "Tassel Charm",
              "Dimensions": "12 x 10 x 5 inches"
            }
          ],          
          "subcategories": [
            "Tote Bags",
            "Clutch Bags",
            "Shoulder Bags",
            "Crossbody Bags",
            "Hobo Bags",
            "Messenger Bags",
            "Satchel Bags",
            "Bucket Bags",
            "Duffel Bags",
            "Laptop Bags",
            "Travel Bags",
            "Beach Bags",
            "Gym Bags",
            "Backpacks",
            "Rolling Luggage"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 207,
          "name": "Sunglasses",
          "details": [
            {
              "Brand": "SunShadeCo",
              "Type": "Aviator Sunglasses",
              "Style": "Classic",
              "Frame Material": "Metal",
              "Frame Color Options": ["Gold", "Silver", "Black"],
              "Lens Material": "Polarized Glass",
              "Lens Color Options": ["Green", "Blue", "Gray"],
              "UV Protection": "100%",
              "Size": "Medium",
              "Condition": "Brand New",
              "Design Features": ["Double Bridge", "Slim Temples"],
              "Price": "$129.99",
              "Features": ["Polarized Lenses", "Scratch-Resistant", "UV400 Protection"],
              "Manufacturer Warranty": "2 Years",
              "Return Policy": "30 Days",
              "Shipping Method": "Standard Shipping",
              "Model Number": "SSC-789",
              "Weight": "30g",
              "Nose Pad Material": "Silicone",
              "Temple Length": "135mm",
              "Hinge Type": "Spring Hinges",
              "Case": "Hard Case Included",
              "Cleaning Cloth": "Microfiber Cloth Included",
              "Logo": "Embossed Logo on Temple",
              "Embellishments": ["Metal Accents", "Engraved Brand Name"],
              "Dimensions": "Lens Width: 55mm, Bridge Width: 15mm"
            }
          ],          
          "subcategories": [
            "Aviator Sunglasses",
            "Wayfarer Sunglasses",
            "Round Sunglasses",
            "Cat-eye Sunglasses",
            "Oversized Sunglasses",
            "Polarized Sunglasses",
            "Sport Sunglasses",
            "Mirrored Sunglasses",
            "Gradient Sunglasses",
            "Clubmaster Sunglasses",
            "Browline Sunglasses",
            "Retro Sunglasses",
            "Designer Sunglasses",
            "Vintage Sunglasses",
            "Ski Goggles"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 208,
          "name": "Hats",
          "details": [
            {
              "Brand": "HatHaven",
              "Type": "Fedora Hat",
              "Style": "Classic",
              "Color Options": ["Black", "Brown", "Gray"],
              "Material": "Wool Felt",
              "Size Options": ["Small", "Medium", "Large"],
              "Brim Style": "Snap Brim",
              "Crown Style": "Teardrop",
              "Condition": "Brand New",
              "Design Features": ["Grosgrain Ribbon Band", "Feather Accent"],
              "Occasion": "Casual, Formal",
              "Price": "$49.99",
              "Features": ["Comfortable Fit", "Breathable"],
              "Manufacturer Warranty": "1 Year",
              "Return Policy": "30 Days",
              "Shipping Method": "Standard Shipping",
              "Model Number": "HH-456",
              "Weight": "200g",
              "Adjustment Type": "Internal Drawstring",
              "Sweatband Material": "Cotton",
              "Logo": "Metal Logo Plate",
              "Embellishments": ["Feather", "Metal Detailing"],
              "Packaging": "Sturdy Hat Box",
              "Dimensions": "Brim Width: 2.5 inches, Crown Height: 4 inches"
            }
          ],          
          "subcategories": [
            "Baseball Caps",
            "Beanie Hats",
            "Fedora Hats",
            "Bucket Hats",
            "Straw Hats",
            "Sun Hats",
            "Cowboy Hats",
            "Berets",
            "Visors",
            "Newsboy Caps",
            "Trucker Hats",
            "Top Hats",
            "Panama Hats",
            "Bucket Hats",
            "Fascinators"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 209,
          "name": "Scarves",
          "details": [
            {
              "Brand": "ScarvesPlus",
              "Type": "Cashmere Scarf",
              "Style": "Wrap",
              "Color Options": ["Burgundy", "Navy Blue", "Gray"],
              "Material": "100% Cashmere",
              "Size": "Large",
              "Pattern": "Herringbone",
              "Condition": "Brand New",
              "Design Features": ["Fringed Ends", "Soft Texture"],
              "Occasion": "Casual, Formal",
              "Price": "$79.99",
              "Features": ["Luxuriously Soft", "Warm and Cozy"],
              "Manufacturer Warranty": "1 Year",
              "Return Policy": "45 Days",
              "Shipping Method": "Standard Shipping",
              "Model Number": "SP-789",
              "Weight": "150g",
              "Maintenance": "Dry Clean Only",
              "Logo": "Embroidered Logo",
              "Embellishments": ["Fringes", "Brand Tag"],
              "Packaging": "Elegant Gift Box",
              "Dimensions": "Length: 180cm, Width: 70cm"
            }
          ],          
          "subcategories": [
            "Silk Scarves",
            "Cashmere Scarves",
            "Infinity Scarves",
            "Pashmina Scarves",
            "Wool Scarves",
            "Cotton Scarves",
            "Linen Scarves",
            "Knit Scarves",
            "Blanket Scarves",
            "Tassel Scarves",
            "Plaid Scarves",
            "Animal Print Scarves",
            "Fringed Scarves",
            "Embroidered Scarves",
            "Summer Scarves"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 210,
          "name": "Belts",
          "details": [
            {
              "Brand": "BeltCrafters",
              "Type": "Leather Belt",
              "Style": "Classic",
              "Color Options": ["Black", "Brown", "Tan"],
              "Material": "Genuine Leather",
              "Size Options": ["30", "32", "34", "36"],
              "Buckle Style": "Pin Buckle",
              "Width": "1.5 inches",
              "Condition": "Brand New",
              "Design Features": ["Textured Finish", "Stitched Edges"],
              "Occasion": "Casual, Formal",
              "Price": "$39.99",
              "Features": ["Durable Construction", "Adjustable Length"],
              "Manufacturer Warranty": "2 Years",
              "Return Policy": "30 Days",
              "Shipping Method": "Standard Shipping",
              "Model Number": "BC-456",
              "Weight": "250g",
              "Adjustment Mechanism": "Prong Holes",
              "Logo": "Embossed Logo on Buckle",
              "Embellishments": ["Contrast Stitching", "Metal Tip"],
              "Packaging": "Gift-Ready Box",
              "Dimensions": "Length: 110cm, Width: 3.8cm"
            }
          ],          
          "subcategories": [
            "Leather Belts",
            "Canvas Belts",
            "Braided Belts",
            "Chain Belts",
            "Western Belts",
            "Studded Belts",
            "Elastic Belts",
            "Genuine Crocodile Belts",
            "Ribbon Belts",
            "Sash Belts",
            "Obi Belts",
            "Web Belts",
            "Dress Belts",
            "Reversible Belts",
            "Wide Belts"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 3,
      "name": "Home & Garden",
      "subcategories": [
        {
          "id": 301,
          "name": "Furniture",
          "details": [
            {
              "Brand": "ElegantLiving",
              "Type": "Sofa",
              "Style": "Modern",
              "Color Options": ["Gray", "Beige", "Navy Blue"],
              "Material": "Premium Fabric",
              "Frame Material": "Solid Wood",
              "Seating Capacity": 3,
              "Condition": "Brand New",
              "Design Features": ["Tufted Backrest", "Pillow Armrests"],
              "Usage": "Living Room",
              "Price": "$799.99",
              "Features": ["Comfortable Cushions", "Sturdy Construction"],
              "Manufacturer Warranty": "5 Years",
              "Return Policy": "60 Days",
              "Shipping Method": "White Glove Delivery",
              "Model Number": "EL-123",
              "Weight": "80kg",
              "Assembly Required": true,
              "Dimensions": "84 x 36 x 30 inches",
              "Additional Items": ["Throw Pillows", "Assembly Instructions"],
              "Package Contents": ["Sofa Base", "Cushions", "Legs"],
              "Logo": "Metal Brand Plate",
              "Embellishments": ["Contrast Piping", "Wooden Legs"]
            }
          ],          
          "subcategories": [
            "Living Room Furniture",
            "Bedroom Furniture",
            "Dining Room Furniture",
            "Outdoor Furniture",
            "Office Furniture",
            "Kids' Furniture",
            "Sofas",
            "Chairs",
            "Tables",
            "Beds",
            "Dressers",
            "Wardrobes",
            "Desks",
            "Bookshelves",
            "Cabinets"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 302,
          "name": "Appliances",
          "details": [
            {
              "Brand": "TechAppliance",
              "Type": "Refrigerator",
              "Style": "French Door",
              "Color Options": ["Stainless Steel", "Black", "White"],
              "Capacity": "20 cubic feet",
              "Energy Efficiency": "Energy Star Certified",
              "Condition": "Brand New",
              "Features": ["Ice Maker", "Water Dispenser", "Smart Home Integration"],
              "Usage": "Kitchen",
              "Price": "$1,199.99",
              "Manufacturer Warranty": "3 Years",
              "Return Policy": "90 Days",
              "Shipping Method": "Home Delivery and Installation",
              "Model Number": "TA-789",
              "Weight": "150kg",
              "Dimensions": "36 x 70 x 30 inches",
              "Installation Type": "Freestanding",
              "Smart Features": ["Wi-Fi Connectivity", "Mobile App Control"],
              "Temperature Control": "Digital Thermostat",
              "Interior Lighting": "LED",
              "Noise Level": "40 dB",
              "Additional Accessories": ["Water Filter", "Ice Tray"],
              "Logo": "Embossed Brand Logo",
              "Embellishments": ["Touch Control Panel", "Stainless Steel Handles"]
            }
          ],          
          "subcategories": [
            "Refrigerators",
            "Washing Machines",
            "Dryers",
            "Dishwashers",
            "Ovens",
            "Microwaves",
            "Vacuum Cleaners",
            "Air Conditioners",
            "Heaters",
            "Fans",
            "Freezers",
            "Ranges",
            "Cooktops",
            "Wine Coolers",
            "Trash Compactors"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 303,
          "name": "Kitchenware",
          "details": [
            {
              "Brand": "CulinaryCraft",
              "Type": "Cookware Set",
              "Material": "Stainless Steel",
              "Color Options": ["Silver", "Copper", "Black"],
              "Number of Pieces": 10,
              "Condition": "Brand New",
              "Features": ["Non-Stick Coating", "Heat-Resistant Handles", "Dishwasher Safe"],
              "Usage": "Kitchen",
              "Price": "$199.99",
              "Manufacturer Warranty": "Lifetime",
              "Return Policy": "60 Days",
              "Shipping Method": "Standard Shipping",
              "Model Number": "CC-456",
              "Weight": "15kg",
              "Dimensions": "Various Sizes",
              "Cookware Pieces": ["Frying Pan", "Saucepan", "Stockpot", "Saute Pan", "Lids"],
              "Utensils Included": ["Spatula", "Slotted Spoon", "Ladle"],
              "Compatibility": ["Gas Stove", "Electric Stove", "Induction Cooktop"],
              "Care Instructions": ["Hand Wash Recommended", "Avoid Metal Utensils"],
              "Logo": "Engraved Brand Logo",
              "Embellishments": ["Riveted Handles", "Glass Lids"]
            }
          ],          
          "subcategories": [
            "Cookware Sets",
            "Bakeware",
            "Cutlery",
            "Kitchen Utensils",
            "Blenders",
            "Coffee Makers",
            "Toasters",
            "Food Processors",
            "Mixers",
            "Dinnerware",
            "Glassware",
            "Flatware",
            "Cups & Mugs",
            "Food Storage",
            "Kitchen Gadgets"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 304,
          "name": "Home Decor",
          "details": [
            {
              "Brand": "ArtistryHome",
              "Type": "Wall Art Set",
              "Style": "Modern Abstract",
              "Color Options": ["Blue and Gold", "Black and White", "Neutral Tones"],
              "Material": "Canvas",
              "Number of Pieces": 3,
              "Condition": "Brand New",
              "Features": ["Gallery-Wrapped", "Ready to Hang", "High-Resolution Print"],
              "Room": "Living Room, Bedroom",
              "Price": "$149.99",
              "Manufacturer Warranty": "2 Years",
              "Return Policy": "30 Days",
              "Shipping Method": "Standard Shipping",
              "Model Number": "AH-789",
              "Weight": "5kg",
              "Dimensions": "Various Sizes",
              "Frame Type": "Wooden Frame",
              "Installation Method": "Sawtooth Hangers",
              "Theme": "Abstract",
              "Maintenance": "Dust with a Soft, Dry Cloth",
              "Logo": "Embossed Brand Logo",
              "Embellishments": ["Textured Finish", "Hand-Painted Accents"]
            }
          ],          
          "subcategories": [
            "Wall Art",
            "Mirrors",
            "Vases",
            "Candles & Candle Holders",
            "Clocks",
            "Decorative Pillows",
            "Rugs",
            "Throws & Blankets",
            "Picture Frames",
            "Sculptures",
            "Artificial Plants",
            "Decorative Bowls",
            "Fountains",
            "Wall Decals",
            "Tapestries"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 305,
          "name": "Bedding & Linens",
          "details": [
            {
              "Brand": "DreamComfort",
              "Type": "Bedding Set",
              "Material": "Egyptian Cotton",
              "Color Options": ["White", "Gray", "Navy Blue"],
              "Size Options": ["Queen", "King", "California King"],
              "Thread Count": 1000,
              "Condition": "Brand New",
              "Features": ["Sateen Weave", "Hypoallergenic", "Deep Pockets"],
              "Room": "Bedroom",
              "Price": "$129.99",
              "Manufacturer Warranty": "3 Years",
              "Return Policy": "45 Days",
              "Shipping Method": "Standard Shipping",
              "Model Number": "DC-456",
              "Weight": "2kg",
              "Dimensions": "Various Sizes",
              "Pieces Included": ["Duvet Cover", "Flat Sheet", "Pillowcases"],
              "Pattern": "Solid",
              "Care Instructions": ["Machine Washable", "Tumble Dry Low"],
              "Logo": "Embroidered Brand Logo",
              "Embellishments": ["Embroidered Hem", "Piped Edges"]
            }
          ],          
          "subcategories": [
            "Bed Sheets",
            "Comforters & Duvets",
            "Pillows",
            "Blankets & Throws",
            "Mattress Toppers",
            "Quilts",
            "Bedspreads",
            "Bed Skirts",
            "Pillowcases",
            "Duvet Covers",
            "Shams",
            "Bedding Sets",
            "Towels",
            "Bathrobes",
            "Sheet Sets"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 306,
          "name": "Lighting",
          "details": [
            {
              "Brand": "IlluminateDesign",
              "Type": "Chandelier",
              "Style": "Modern Pendant",
              "Color Options": ["Brushed Nickel", "Antique Brass", "Matte Black"],
              "Material": "Metal and Glass",
              "Number of Lights": 6,
              "Condition": "Brand New",
              "Features": ["Adjustable Height", "Dimmable", "LED Compatible"],
              "Room": "Dining Room, Living Room",
              "Price": "$299.99",
              "Manufacturer Warranty": "5 Years",
              "Return Policy": "30 Days",
              "Shipping Method": "Standard Shipping",
              "Model Number": "ID-789",
              "Weight": "8kg",
              "Dimensions": "24 x 24 x 16 inches",
              "Installation Type": "Hardwired",
              "Bulb Type": "Candelabra Base",
              "Power Source": "Electric",
              "Energy Efficiency": "Energy Star Certified",
              "Additional Accessories": ["Mounting Hardware", "Installation Instructions"],
              "Logo": "Engraved Brand Logo",
              "Embellishments": ["Crystal Accents", "Satin Finish"]
            }
          ],          
          "subcategories": [
            "Ceiling Lights",
            "Table Lamps",
            "Floor Lamps",
            "Wall Sconces",
            "Chandeliers",
            "Pendant Lights",
            "Desk Lamps",
            "Outdoor Lighting",
            "Track Lighting",
            "Candle Wall Sconces",
            "Ceiling Fans",
            "Under Cabinet Lighting",
            "Lamp Shades",
            "String Lights",
            "LED Bulbs"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 307,
          "name": "Gardening Tools",
          "details": [
            {
              "Brand": "GreenThumbPro",
              "Type": "Gardening Tool Set",
              "Material": "Stainless Steel",
              "Color Options": ["Green", "Red", "Blue"],
              "Number of Pieces": 10,
              "Condition": "Brand New",
              "Features": ["Rust-Resistant", "Ergonomic Handles", "Durable Construction"],
              "Intended Use": "Gardening",
              "Price": "$79.99",
              "Manufacturer Warranty": "Lifetime",
              "Return Policy": "60 Days",
              "Shipping Method": "Standard Shipping",
              "Model Number": "GT-456",
              "Weight": "3kg",
              "Dimensions": "Various Sizes",
              "Tools Included": ["Pruners", "Trowel", "Weeder", "Gloves"],
              "Handle Material": "Rubberized",
              "Storage Case": "Included",
              "Maintenance": "Clean after each use, Store in a dry place",
              "Logo": "Embossed Brand Logo",
              "Embellishments": ["Colorful Handles", "Engraved Measurement Markings"]
            }
          ],          
          "subcategories": [
            "Garden Shovels",
            "Rakes",
            "Pruners",
            "Garden Hoses",
            "Lawn Mowers",
            "Hedge Trimmers",
            "Garden Gloves",
            "Watering Cans",
            "Wheelbarrows",
            "Garden Forks",
            "Trowels",
            "Weed Pullers",
            "Garden Carts",
            "Planters",
            "Garden Kneelers"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 308,
          "name": "DIY & Tools",
          "details": [
            {
              "Brand": "ToolMaster",
              "Type": "DIY Tool Kit",
              "Material": "Carbon Steel",
              "Color Options": ["Red", "Yellow", "Black"],
              "Number of Pieces": 20,
              "Condition": "Brand New",
              "Features": ["Durable Construction", "Ergonomic Grips", "Versatile Applications"],
              "Intended Use": "DIY Projects, Home Repairs",
              "Price": "$129.99",
              "Manufacturer Warranty": "2 Years",
              "Return Policy": "45 Days",
              "Shipping Method": "Standard Shipping",
              "Model Number": "TM-789",
              "Weight": "5kg",
              "Dimensions": "Various Sizes",
              "Tools Included": ["Screwdriver Set", "Adjustable Wrench", "Tape Measure", "Utility Knife"],
              "Handle Material": "Rubberized",
              "Storage Case": "Included",
              "Power Source": "Manual",
              "Usage Tips": "Follow safety guidelines, Keep away from children",
              "Logo": "Embossed Brand Logo",
              "Embellishments": ["Color-Coded Handles", "Portable Carry Case"]
            }
          ],          
          "subcategories": [
            "Power Tools",
            "Hand Tools",
            "Tool Sets",
            "Toolboxes",
            "Screwdrivers",
            "Wrenches",
            "Drills",
            "Saws",
            "Measuring Tools",
            "Levels",
            "Pliers",
            "Hammers",
            "Painting Supplies",
            "Safety Equipment",
            "Workbenches"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 309,
          "name": "Cleaning Supplies",
          "details": [
            {
              "Brand": "CleanSweep",
              "Type": "Cleaning Supplies Set",
              "Material": "Microfiber, Plastic",
              "Color Options": ["Blue", "Green", "Yellow"],
              "Number of Pieces": 15,
              "Condition": "Brand New",
              "Features": ["Microfiber Cloths", "Mop and Bucket System", "All-Purpose Cleaner"],
              "Intended Use": "Household Cleaning",
              "Price": "$49.99",
              "Manufacturer Warranty": "1 Year",
              "Return Policy": "30 Days",
              "Shipping Method": "Standard Shipping",
              "Model Number": "CS-456",
              "Weight": "2.5kg",
              "Dimensions": "Various Sizes",
              "Supplies Included": ["Microfiber Cloths", "Mop", "Bucket", "Broom", "Dustpan"],
              "Usage Instructions": "Follow product-specific instructions",
              "Storage": "Dry and cool place",
              "Logo": "Printed Brand Logo",
              "Embellishments": ["Scented Cleaner", "Textured Microfiber"]
            }
          ],          
          "subcategories": [
            "Vacuum Cleaners",
            "Brooms",
            "Mops",
            "Dusters",
            "Cleaning Solutions",
            "Trash Bags",
            "Trash Cans",
            "Cleaning Cloths",
            "Sponges",
            "Brushes",
            "Toilet Cleaners",
            "Laundry Detergent",
            "Air Fresheners",
            "Dish Soap",
            "Paper Towels"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 310,
          "name": "Home Improvement Services",
          "details": [
            {
              "Service": "Kitchen Remodeling",
              "Provider": "HomeRevitalize",
              "Service Type": "Full Renovation",
              "Scope of Work": "Cabinet Replacement, Countertop Installation, Flooring Upgrade",
              "Color Options": ["Modern White", "Classic Wood", "Contemporary Gray"],
              "Estimated Duration": "4-6 Weeks",
              "Condition": "Customizable to Client Preferences",
              "Features": ["Professional Design Consultation", "High-Quality Materials", "Licensed Contractors"],
              "Price Range": "$15,000 - $25,000",
              "Provider Warranty": "2 Years",
              "Terms and Conditions": "Detailed in Service Agreement",
              "Scheduling": "Flexible, Based on Client Availability",
              "Service Area": "Local and Surrounding Areas",
              "Phone": "555-1234",
              "Email": "info@homerevitalize.com",
              "Website": "www.homerevitalize.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Interior Design",
            "Home Remodeling",
            "Plumbing Services",
            "Electrical Services",
            "Painting Services",
            "Roofing Services",
            "Carpentry Services",
            "HVAC Services",
            "Landscaping Services",
            "Flooring Services",
            "Masonry Services",
            "Window Installation",
            "Kitchen Remodeling",
            "Bathroom Renovation",
            "Basement Finishing"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 4,
      "name": "Vehicles",
      "subcategories": [
        {
          "id": 401,
          "name": "Cars",
          "details": [
            {
              "Brand": "AutoElite",
              "Model": "LuxuryX",
              "Color Options": ["Midnight Black", "Pearl White", "Champagne Gold"],
              "Condition": "Brand New",
              "Performance": "V6 Engine, 300 HP",
              "Fuel Type": "Gasoline",
              "Transmission": "Automatic",
              "Mileage": "20 miles per gallon",
              "Features": ["Leather Seats", "Panoramic Sunroof", "Adaptive Cruise Control"],
              "Safety Features": ["Blind Spot Monitoring", "Lane Departure Warning", "Collision Avoidance System"],
              "Entertainment System": ["10-inch Touchscreen", "Premium Audio System", "Bluetooth Connectivity"],
              "Dimensions": "Length: 190 inches, Width: 75 inches, Height: 55 inches",
              "Weight": "3,800 lbs",
              "Warranty": "3 Years or 36,000 miles",
              "Price": "$45,000",
              "Financing Options": ["Low APR", "Lease Options"],
              "Trade-In Accepted": true,
              "Insurance Options": ["Comprehensive Coverage", "Extended Warranty"],
              "Delivery Options": ["Local Pickup", "Nationwide Shipping"],
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Sedans",
            "SUVs",
            "Coupes",
            "Convertibles",
            "Hatchbacks",
            "Sports Cars",
            "Electric Cars",
            "Hybrid Cars",
            "Luxury Cars",
            "Compact Cars",
            "Midsize Cars",
            "Full-size Cars",
            "Muscle Cars",
            "Classic Cars",
            "Vintage Cars"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 402,
          "name": "Motorcycles",
          "details": [
            {
              "Brand": "SpeedRider",
              "Model": "RapidX",
              "Color Options": ["Jet Black", "Racing Red", "Steel Grey"],
              "Condition": "Brand New",
              "Engine Type": "Inline-4, 1000cc",
              "Fuel System": "Electronic Fuel Injection (EFI)",
              "Transmission": "6-Speed Manual",
              "Mileage": "45 miles per gallon",
              "Features": ["Adjustable Suspension", "LED Lighting", "Digital Instrument Cluster"],
              "Safety Features": ["ABS (Anti-lock Braking System)", "Traction Control", "Stability Control"],
              "Dimensions": "Length: 82 inches, Width: 30 inches, Height: 45 inches",
              "Weight": "450 lbs",
              "Warranty": "2 Years or 24,000 miles",
              "Price": "$12,999",
              "Financing Options": ["Low APR", "Lease Options"],
              "Trade-In Accepted": true,
              "Insurance Options": ["Comprehensive Coverage", "Extended Warranty"],
              "Delivery Options": ["Local Pickup", "Nationwide Shipping"],
              "Manufacturer's Website": "www.speedrider.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Sport Bikes",
            "Cruisers",
            "Touring Bikes",
            "Dirt Bikes",
            "Scooters",
            "Cafe Racers",
            "Adventure Bikes",
            "Bobbers",
            "Choppers",
            "Custom Bikes",
            "Electric Motorcycles",
            "Trikes",
            "Vintage Motorcycles",
            "Off-road Motorcycles",
            "Retro Motorcycles"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 403,
          "name": "Trucks & Vans",
          "details": [
            {
              "Brand": "CargoMax",
              "Model": "FreightMaster 2500",
              "Color Options": ["Arctic White", "Midnight Blue", "Graphite Gray"],
              "Condition": "Brand New",
              "Engine Type": "V8 Diesel, 6.7L",
              "Fuel System": "Common Rail Direct Injection",
              "Transmission": "8-Speed Automatic",
              "Cargo Capacity": "2500 cubic feet",
              "Towing Capacity": "10,000 lbs",
              "Features": ["Spacious Interior", "Advanced Safety Systems", "Traction Control"],
              "Safety Features": ["ABS (Anti-lock Braking System)", "Electronic Stability Control", "Rearview Camera"],
              "Dimensions": "Length: 240 inches, Width: 80 inches, Height: 90 inches",
              "Weight": "8,000 lbs",
              "Warranty": "3 Years or 36,000 miles",
              "Price": "$35,999",
              "Financing Options": ["Low APR", "Lease Options"],
              "Trade-In Accepted": true,
              "Insurance Options": ["Commercial Auto Insurance", "Extended Warranty"],
              "Delivery Options": ["Local Pickup", "Nationwide Shipping"],
              "Manufacturer's Website": "www.cargomax.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Pickup Trucks",
            "SUVs",
            "Crossover SUVs",
            "Minivans",
            "Cargo Vans",
            "Commercial Trucks",
            "Box Trucks",
            "Dump Trucks",
            "Flatbed Trucks",
            "Tow Trucks",
            "Utility Trailers",
            "Semi-trucks",
            "Food Trucks",
            "Camper Vans",
            "Delivery Vans"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 404,
          "name": "Boats",
          "details": [
            {
              "Brand": "AquaCruiser",
              "Model": "OceanMaster 3000",
              "Color Options": ["Ocean Blue", "Sunset Red", "Midnight Black"],
              "Condition": "Brand New",
              "Hull Material": "Fiberglass",
              "Length": "30 feet",
              "Beam": "10 feet",
              "Draft": "3 feet",
              "Engine Type": "Outboard Motor, 300HP",
              "Fuel Type": "Gasoline",
              "Features": ["Spacious Deck", "Cabin with Sleeping Quarters", "Fish Finder"],
              "Safety Features": ["Life Jackets", "Emergency Flares", "GPS Navigation"],
              "Capacity": "8 Persons",
              "Max Speed": "35 knots",
              "Warranty": "5 Years",
              "Price": "$75,000",
              "Financing Options": ["Marine Loans", "Lease Options"],
              "Trade-In Accepted": true,
              "Insurance Options": ["Boat Insurance", "Extended Warranty"],
              "Delivery Options": ["Local Pickup", "Nationwide Shipping"],
              "Manufacturer's Website": "www.aquacruiser.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Yachts",
            "Sailboats",
            "Motorboats",
            "Fishing Boats",
            "Speedboats",
            "Pontoon Boats",
            "Cruiser Boats",
            "Jet Skis",
            "Kayaks",
            "Canoes",
            "Rowboats",
            "Houseboats",
            "Dinghies",
            "Catamarans",
            "Inflatable Boats"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 405,
          "name": "RVs & Campers",
          "details": [
            {
              "Brand": "WanderLuxe",
              "Model": "AdventureSeeker X1",
              "Color Options": ["Forest Green", "Desert Tan", "Glacier White"],
              "Condition": "Brand New",
              "RV Type": "Travel Trailer",
              "Length": "25 feet",
              "Sleeping Capacity": "Sleeps 4",
              "Slide-Outs": 1,
              "Features": ["Kitchenette", "Full Bathroom", "Dining Area"],
              "Appliances": ["Refrigerator", "Microwave", "Stove", "Air Conditioner"],
              "Entertainment": ["TV", "Bluetooth Stereo System"],
              "Safety Features": ["Smoke Detector", "Carbon Monoxide Detector", "Fire Extinguisher"],
              "Water Capacity": "50 gallons",
              "Waste Capacity": "30 gallons",
              "Power Source": "30-amp Electric Hookup",
              "Warranty": "2 Years",
              "Price": "$28,999",
              "Financing Options": ["RV Loans", "Lease Options"],
              "Trade-In Accepted": true,
              "Insurance Options": ["RV Insurance", "Extended Warranty"],
              "Delivery Options": ["Local Pickup", "Nationwide Shipping"],
              "Manufacturer's Website": "www.wanderluxe.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Travel Trailers",
            "Fifth Wheels",
            "Motorhomes",
            "Pop-up Campers",
            "Truck Campers",
            "Class A RVs",
            "Class B RVs",
            "Class C RVs",
            "Toy Haulers",
            "Teardrop Trailers",
            "Camper Vans",
            "Airstream Trailers",
            "Campervans",
            "Expandable Trailers",
            "Hybrid Campers"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 406,
          "name": "Car Parts & Accessories",
          "details": [
            {
              "Brand": "AutoTech",
              "Model": "TurboBoost Kit",
              "Compatible Vehicles": ["Honda Civic", "Ford Mustang", "Chevrolet Camaro"],
              "Color Options": ["Silver", "Black", "Red"],
              "Condition": "Brand New",
              "Part Type": "Performance Upgrade",
              "Compatibility": ["Fuel Injection System", "Exhaust System", "Engine"],
              "Installation Type": "Bolt-On",
              "Horsepower Gain": "Up to 50 HP",
              "Torque Gain": "Up to 30 lb-ft",
              "Features": ["High-Quality Alloy Construction", "Improved Turbocharger"],
              "Warranty": "1 Year",
              "Price": "$499.99",
              "Financing Options": ["PayPal Credit", "Affirm"],
              "Trade-In Accepted": false,
              "Return Policy": "30 Days",
              "Shipping Options": ["Standard Shipping", "Express Shipping"],
              "Manufacturer's Website": "www.autotech.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Tires",
            "Batteries",
            "Brake Pads",
            "Oil Filters",
            "Car Mats",
            "Car Covers",
            "Roof Racks",
            "Car Alarms",
            "Car Stereos",
            "GPS Navigation",
            "Car Seats",
            "Steering Wheels",
            "Exhaust Systems",
            "Car Lights",
            "Wheel Covers"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 407,
          "name": "Bicycles",
          "details": [
            {
              "Brand": "CyclePro",
              "Model": "AdventureRide X9",
              "Color Options": ["Mountain Blue", "Forest Green", "Sunset Orange"],
              "Condition": "Brand New",
              "Bike Type": "Mountain Bike",
              "Frame Material": "Aluminum Alloy",
              "Frame Size": "17 inches",
              "Wheel Size": "27.5 inches",
              "Gears": "21-Speed",
              "Suspension": "Front Suspension Fork",
              "Brake Type": "Disc Brakes",
              "Features": ["Shimano Gear System", "Quick-Release Wheels", "Adjustable Seat"],
              "Weight": "28 lbs",
              "Warranty": "Lifetime Frame Warranty, 1 Year Components",
              "Price": "$599.99",
              "Financing Options": ["Klarna", "Afterpay"],
              "Trade-In Accepted": false,
              "Return Policy": "60 Days",
              "Shipping Options": ["Standard Shipping", "Assembly Service Available"],
              "Manufacturer's Website": "www.cyclepro.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Mountain Bikes",
            "Road Bikes",
            "Hybrid Bikes",
            "Cruiser Bikes",
            "Electric Bikes",
            "BMX Bikes",
            "Folding Bikes",
            "City Bikes",
            "Commuter Bikes",
            "Kids' Bikes",
            "Gravel Bikes",
            "Fat Bikes",
            "Tandem Bikes",
            "Triathlon Bikes",
            "Recumbent Bikes"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 408,
          "name": "Scooters",
          "details": [
            {
              "Brand": "ScootMaster",
              "Model": "UrbanGlide 3000",
              "Color Options": ["Matte Black", "Electric Blue", "Crimson Red"],
              "Condition": "Brand New",
              "Scooter Type": "Electric Scooter",
              "Motor Power": "500W",
              "Battery Type": "Lithium-Ion, 36V",
              "Range": "Up to 25 miles per charge",
              "Max Speed": "20 mph",
              "Weight Capacity": "220 lbs",
              "Features": ["Foldable Design", "LED Lights", "Digital Display"],
              "Brake System": "Disc Brake, Electronic Brake",
              "Suspension": "Front and Rear Suspension",
              "Warranty": "2 Years",
              "Price": "$399.99",
              "Financing Options": ["PayPal Credit", "Affirm"],
              "Trade-In Accepted": false,
              "Return Policy": "45 Days",
              "Shipping Options": ["Standard Shipping", "Express Shipping"],
              "Manufacturer's Website": "www.scootmaster.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Electric Scooters",
            "Gas Scooters",
            "Kick Scooters",
            "Mopeds",
            "Vespa Scooters",
            "Motor Scooters",
            "Foldable Scooters",
            "Retro Scooters",
            "Off-road Scooters",
            "Three-Wheel Scooters",
            "Racing Scooters",
            "Touring Scooters",
            "Stunt Scooters",
            "Mini Scooters",
            "Hybrid Scooters"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 409,
          "name": "ATVs & UTVs",
          "details": [
            {
              "Brand": "OffRoadMaster",
              "Model": "TerrainTrek X4",
              "Color Options": ["Camouflage Green", "Desert Tan", "Stealth Black"],
              "Condition": "Brand New",
              "Vehicle Type": "UTV",
              "Engine Type": "4-Stroke, Liquid-Cooled",
              "Displacement": "700cc",
              "Transmission": "Automatic CVT",
              "Drive System": "Selectable 4WD/2WD",
              "Seating Capacity": "4 Persons",
              "Towing Capacity": "1,500 lbs",
              "Features": ["Roll Cage", "Winch", "Roof", "LED Light Bar"],
              "Suspension": "Independent Suspension",
              "Brake System": "Hydraulic Disc",
              "Warranty": "3 Years",
              "Price": "$12,999",
              "Financing Options": ["Bank Loan", "Dealer Financing"],
              "Trade-In Accepted": true,
              "Return Policy": "30 Days",
              "Shipping Options": ["Local Pickup", "Nationwide Delivery"],
              "Manufacturer's Website": "www.offroadmaster.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Sport ATVs",
            "Utility ATVs",
            "Youth ATVs",
            "Four-Wheelers",
            "Side-by-Side UTVs",
            "Racing ATVs",
            "Mud ATVs",
            "Sand Dune ATVs",
            "Electric ATVs",
            "Farm ATVs",
            "Hunting ATVs",
            "Military ATVs",
            "Recreational UTVs",
            "Work UTVs",
            "Camo ATVs"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 410,
          "name": "Car Rental Services",
          "details": [
            {
              "Brand": "CityDrive Rentals",
              "Car Type": "Sedan",
              "Model": "CityCruiser 2023",
              "Color Options": ["Silver", "Midnight Black", "Champagne Gold"],
              "Rental Periods": ["Daily", "Weekly", "Monthly"],
              "Transmission": "Automatic",
              "Fuel Type": "Petrol",
              "Seating Capacity": "5 Persons",
              "Mileage Limit": "Unlimited Miles",
              "Features": ["Bluetooth Connectivity", "GPS Navigation", "Air Conditioning"],
              "Insurance Coverage": ["Liability Insurance", "Collision Damage Waiver"],
              "Additional Services": ["Airport Pickup/Drop-off", "Child Seat Rental"],
              "Pickup Locations": ["City Center", "Airport", "Hotel Delivery"],
              "Driver Options": ["Self-Drive", "Chauffeur Service"],
              "Age Restrictions": "Minimum 21 years old",
              "Security Deposit": "$300",
              "Reservation Fee": "$20",
              "Cancellation Policy": "Free Cancellation up to 48 hours before pickup",
              "Price": "$50/day (Standard)",
              "Discounts": ["10% Weekly Rental", "20% Monthly Rental"],
              "Online Booking": true,
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Standard Car Rentals",
            "SUV Rentals",
            "Luxury Car Rentals",
            "Truck Rentals",
            "Van Rentals",
            "Convertible Car Rentals",
            "Exotic Car Rentals",
            "Sports Car Rentals",
            "Economy Car Rentals",
            "Long-term Car Rentals",
            "One-way Car Rentals",
            "Airport Car Rentals",
            "RV Rentals",
            "Motorcycle Rentals",
            "Chauffeur Services"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 5,
      "name": "Sports & Outdoors",
      "subcategories": [
        {
          "id": 501,
          "name": "Fitness Equipment",
          "details": [
            {
              "Brand": "FitGear Pro",
              "Equipment Type": "Treadmill",
              "Model": "ProRunner X500",
              "Color Options": ["Black", "Silver", "Red"],
              "Condition": "Brand New",
              "Motor Power": "3.0 HP",
              "Speed Range": "0.5 - 12 mph",
              "Incline Levels": "0-15%",
              "Running Surface": "20 x 60 inches",
              "Programs": ["Cardio", "Interval Training", "Hill Climb"],
              "Heart Rate Monitoring": "Built-in Sensors, Wireless Chest Strap Compatible",
              "Foldable": true,
              "Display": "LCD Touchscreen",
              "Built-in Speakers": true,
              "Bluetooth Connectivity": true,
              "Weight Capacity": "350 lbs",
              "Warranty": "Lifetime Frame, 3 Years Motor, 1 Year Parts",
              "Price": "$1,299",
              "Financing Options": ["Affirm", "PayPal Credit"],
              "Return Policy": "30 Days",
              "Shipping Options": ["Standard Shipping", "White Glove Delivery"],
              "Assembly Required": true,
              "Manufacturer's Website": "www.fitgearpro.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Treadmills",
            "Exercise Bikes",
            "Elliptical Machines",
            "Weight Benches",
            "Dumbbells",
            "Kettlebells",
            "Resistance Bands",
            "Yoga Mats",
            "Rowing Machines",
            "Home Gyms",
            "Jump Ropes",
            "Pilates Reformers",
            "Strength Training Equipment",
            "Exercise Balls",
            "Boxing Equipment"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 502,
          "name": "Camping Gear",
          "details": [
            {
              "Brand": "AdventurePro",
              "Gear Type": "Camping Set",
              "Model": "TrailBlazer Ultimate",
              "Color Options": ["Forest Green", "Desert Tan", "Arctic Blue"],
              "Condition": "Brand New",
              "Tent Capacity": "4 Persons",
              "Sleeping Bags": ["Mummy Bag - Single", "Rectangular Bag - Double"],
              "Sleeping Pad Included": true,
              "Cooking Stove": "Portable Gas Stove",
              "Cookware": ["Pots", "Pans", "Utensils"],
              "Water Filtration System": "Gravity Filter",
              "Backpack Capacity": "65 Liters",
              "Trekking Poles": true,
              "Headlamp": "LED Headlamp with Adjustable Brightness",
              "Portable Solar Charger": true,
              "First Aid Kit": true,
              "Navigation Tools": ["Compass", "Map", "GPS Device"],
              "Emergency Shelter": "Emergency Bivy",
              "Multi-Tool": "Swiss Army Knife",
              "Fire Starter": "Waterproof Matches",
              "Backpacking Hammock": true,
              "Warranty": "1 Year",
              "Price": "$499.99",
              "Financing Options": ["PayPal Credit", "Affirm"],
              "Return Policy": "45 Days",
              "Shipping Options": ["Standard Shipping", "Expedited Shipping"],
              "Manufacturer's Website": "www.adventurepro.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Tents",
            "Sleeping Bags",
            "Camp Stoves",
            "Backpacks",
            "Camp Chairs",
            "Coolers",
            "Lanterns",
            "Hiking Boots",
            "GPS Devices",
            "Camping Cookware",
            "First Aid Kits",
            "Camping Hammocks",
            "Trekking Poles",
            "Camping Tarpaulins",
            "Portable Water Filters"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 503,
          "name": "Sports Gear",
          "details": [
            {
              "Brand": "SportXtreme",
              "Gear Type": "Complete Basketball Set",
              "Model": "XtremeHoops 5000",
              "Color Options": ["Orange/Black", "Red/White", "Blue/Yellow"],
              "Condition": "Brand New",
              "Ball Material": "Composite Leather",
              "Backboard Material": "Tempered Glass",
              "Height Adjustment": true,
              "Adjustment Range": "7.5 to 10 feet",
              "Rim Type": "Breakaway with Spring Flex",
              "Net Material": "All-Weather Nylon",
              "Basketball Size": "Official Size 7",
              "Pump Included": true,
              "Court Markings": "Regulation Lines and Three-Point Arc",
              "Basketball Hoop Diameter": "18 inches",
              "Court Dimensions": "Full Court, Indoor/Outdoor Use",
              "Apparel Included": ["Jersey", "Shorts", "Socks"],
              "Shoe Size Options": ["Men's 8-13", "Women's 6-10"],
              "Protective Gear": ["Knee Pads", "Elbow Pads"],
              "Water Bottle": true,
              "Warranty": "2 Years",
              "Price": "$699.99",
              "Financing Options": ["Credit Card", "Installment Plans"],
              "Return Policy": "60 Days",
              "Shipping Options": ["Standard Shipping", "Express Shipping"],
              "Manufacturer's Website": "www.sportxtreme.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Basketballs",
            "Soccer Balls",
            "Football Helmets",
            "Baseball Bats",
            "Tennis Rackets",
            "Golf Clubs",
            "Hockey Sticks",
            "Cricket Equipment",
            "Rugby Balls",
            "Volleyballs",
            "Badminton Rackets",
            "Table Tennis Paddles",
            "Softball Gloves",
            "Lacrosse Sticks",
            "Archery Bows"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 504,
          "name": "Bicycles",
          "details": [
            {
              "Brand": "CycleMaster",
              "Bike Type": "Mountain Bike",
              "Model": "TerrainTrek Pro",
              "Color Options": ["Forest Green", "Slate Gray", "Sunset Orange"],
              "Condition": "Brand New",
              "Frame Material": "Aluminum Alloy",
              "Suspension Type": "Full Suspension",
              "Wheel Size": "29 inches",
              "Gearing System": "Shimano XT 1x12-Speed",
              "Brake Type": "Hydraulic Disc Brakes",
              "Tire Type": "Tubeless",
              "Seat Type": "Adjustable Mountain Saddle",
              "Handlebar Type": "Wide Riser Handlebar",
              "Pedal Type": "Clipless Pedals",
              "Front Fork Travel": "120mm",
              "Rear Shock Travel": "100mm",
              "Head Tube Angle": "68 degrees",
              "Weight": "12.5 kg",
              "Available Sizes": ["S", "M", "L", "XL"],
              "Accessories": ["Front and Rear Lights", "Water Bottle Holder"],
              "Warranty": "Lifetime Frame, 2 Years Components",
              "Price": "$1,499.99",
              "Financing Options": ["PayPal Credit", "Affirm"],
              "Return Policy": "30 Days",
              "Shipping Options": ["Standard Shipping", "Express Shipping"],
              "Manufacturer's Website": "www.cyclemaster.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Mountain Bikes",
            "Road Bikes",
            "Hybrid Bikes",
            "Cruiser Bikes",
            "Electric Bikes",
            "BMX Bikes",
            "Folding Bikes",
            "City Bikes",
            "Commuter Bikes",
            "Kids' Bikes",
            "Gravel Bikes",
            "Fat Bikes",
            "Tandem Bikes",
            "Triathlon Bikes",
            "Recumbent Bikes"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 505,
          "name": "Fishing Gear",
          "details": [
            {
              "Brand": "AnglerPro",
              "Gear Type": "Complete Fishing Kit",
              "Model": "FishMaster 2000",
              "Color Options": ["Camo Green", "Ocean Blue", "Sunset Red"],
              "Condition": "Brand New",
              "Rod Type": "Spinning Rod",
              "Reel Type": "Baitcasting Reel",
              "Line Weight": "8-20 lbs",
              "Lure Weight": "1/4 - 3/4 oz",
              "Gear Ratio": "6.2:1",
              "Ball Bearings": 7+1,
              "Material": "Carbon Fiber Composite",
              "Handle Type": "EVA Foam Grip",
              "Tackle Box": "Waterproof, 4-Tray Design",
              "Hooks": ["Assorted Sizes", "Barbless Options"],
              "Sinkers": ["Split Shot", "Bullet Weights"],
              "Lures": ["Crankbaits", "Soft Plastics", "Spoons"],
              "Fishing Line": "Monofilament, 200 yards",
              "Fish Finder": "Portable Sonar Fish Finder",
              "Fishing Chair": "Folding Camp Chair",
              "Cooler": "Insulated Cooler Bag",
              "Waders": "Chest Waders, Neoprene",
              "Tackle Bag": "Shoulder Sling Bag",
              "Knife": "Fillet Knife with Sheath",
              "Warranty": "1 Year",
              "Price": "$249.99",
              "Financing Options": ["Credit Card", "Installment Plans"],
              "Return Policy": "45 Days",
              "Shipping Options": ["Standard Shipping", "Express Shipping"],
              "Manufacturer's Website": "www.anglerpro.com",
              "Logo": "Embossed Brand Logo"
            }
          ], 
          "subcategories": [
            "Fishing Rods",
            "Fishing Reels",
            "Fishing Lines",
            "Fishing Lures",
            "Fishing Tackle Boxes",
            "Fishing Hooks",
            "Fishing Accessories",
            "Fishing Clothing",
            "Fishing Kayaks",
            "Fish Finders",
            "Fly Fishing Gear",
            "Ice Fishing Equipment",
            "Baitcasting Reels",
            "Spinning Reels",
            "Telescopic Fishing Rods"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 506,
          "name": "Hiking & Outdoor Shoes",
          "details": [
            {
              "Brand": "TrailBlazer",
              "Shoe Type": "Hiking Boots",
              "Model": "SummitExplorer GTX",
              "Color Options": ["Slate Gray", "Forest Green", "Midnight Black"],
              "Condition": "Brand New",
              "Material": "Waterproof Leather and Gore-Tex",
              "Sole Type": "Vibram Rubber",
              "Closure Type": "Lace-up",
              "Size Options": ["Men's 7-14", "Women's 5-11"],
              "Ankle Support": true,
              "Waterproof": true,
              "Breathability": "Ventilated Mesh Lining",
              "Traction": "Multi-directional Lugs",
              "Toe Protection": "Rubber Toe Cap",
              "Arch Support": "Ortholite Insole",
              "Cushioning": "EVA Midsole",
              "Weight": "1.2 lbs per shoe",
              "Terrain Compatibility": ["Rocky", "Muddy", "Trail"],
              "Activity": ["Hiking", "Backpacking", "Outdoor Exploration"],
              "Warranty": "2 Years",
              "Price": "$129.99",
              "Financing Options": ["Credit Card", "Afterpay"],
              "Return Policy": "60 Days",
              "Shipping Options": ["Standard Shipping", "Expedited Shipping"],
              "Manufacturer's Website": "www.trailblazer.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Hiking Boots",
            "Trail Running Shoes",
            "Hiking Sandals",
            "Waterproof Hiking Shoes",
            "Approach Shoes",
            "Mountaineering Boots",
            "Backpacking Boots",
            "Outdoor Sandals",
            "Trekking Shoes",
            "Climbing Shoes",
            "Winter Hiking Boots",
            "Gaiters",
            "Snowshoes",
            "Cross-country Ski Boots",
            "Walking Shoes"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 507,
          "name": "Golf Equipment",
          "details": [
            {
              "Brand": "ProSwing",
              "Equipment Type": "Complete Golf Club Set",
              "Model": "MastersEdition 2022",
              "Color Options": ["Silver/Black", "Navy Blue/Gold", "Red/White"],
              "Condition": "Brand New",
              "Club Types": ["Driver", "Fairway Woods (3, 5)", "Hybrids (4, 5)", "Irons (6-PW)", "Wedge (SW)", "Putter"],
              "Shaft Material": "Graphite (Woods, Hybrids) / Steel (Irons, Putter)",
              "Grip Type": "Corded Rubber",
              "Club Bag": "Lightweight Carry Bag with Stand",
              "Golf Ball Type": "Multi-layer Performance Balls",
              "Golf Glove": "Premium Leather, Left Hand",
              "Golf Shoes": "Spiked Golf Shoes, Waterproof",
              "Range Finder": "Laser Range Finder with PinSeeker Technology",
              "Golf Towel": "Microfiber Towel with Carabiner Clip",
              "Divot Repair Tool": "Foldable Metal Tool",
              "Umbrella": "Wind-resistant Golf Umbrella",
              "Golf Tees": "Wooden Tees, Various Sizes",
              "Ball Markers": "Magnetic Hat Clip with Markers",
              "Scorecard Holder": "Leather Scorecard Holder",
              "Rain Cover": "Waterproof Rain Cover for Bag",
              "Warranty": "1 Year",
              "Price": "$899.99",
              "Financing Options": ["PayPal Credit", "Klarna"],
              "Return Policy": "90 Days",
              "Shipping Options": ["Standard Shipping", "Express Shipping"],
              "Manufacturer's Website": "www.proswing.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Golf Clubs",
            "Golf Balls",
            "Golf Bags",
            "Golf Gloves",
            "Golf Shoes",
            "Golf Rangefinders",
            "Putting Greens",
            "Golf Irons",
            "Golf Drivers",
            "Golf Putters",
            "Golf Wedges",
            "Golf Hybrids",
            "Golf Fairway Woods",
            "Golf Push Carts",
            "Golf Swing Analyzers"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 508,
          "name": "Yoga & Pilates Gear",
          "details": [
            {
              "Brand": "ZenFlex",
              "Gear Type": "Complete Yoga & Pilates Set",
              "Model": "HarmonyFlow 3000",
              "Color Options": ["Ocean Blue", "Sage Green", "Sunrise Orange"],
              "Condition": "Brand New",
              "Yoga Mat": "Eco-Friendly TPE Material, Non-Slip Surface",
              "Pilates Ring": "Dual-Grip, Lightweight Resistance Ring",
              "Yoga Blocks": "High-Density Foam Blocks (2 pcs)",
              "Yoga Strap": "Durable Cotton Strap with Adjustable Buckle",
              "Yoga Towel": "Microfiber Quick-Dry Towel",
              "Pilates Ball": "Anti-Burst Stability Ball (65cm)",
              "Yoga Wheel": "Dharma Yoga Wheel for Backbends",
              "Yoga Bolster": "Cotton Filled Rectangular Bolster",
              "Yoga Pants": "High-Waisted, Moisture-Wicking Leggings",
              "Yoga Top": "Breathable Tank Top with Built-in Bra",
              "Yoga Bag": "Carry Bag with Adjustable Strap",
              "Yoga Socks": "Non-Slip Grip Socks",
              "Meditation Cushion": "Buckwheat Filled Meditation Pillow",
              "Yoga Blanket": "Soft, Warm, and Breathable",
              "Mindfulness Journal": "Guided Journal for Yoga Practices",
              "Instructional DVD": "Yoga & Pilates Workout DVD",
              "Water Bottle": "Stainless Steel Yoga Bottle",
              "Yoga Music Playlist": "Curated Playlist for Relaxation",
              "Warranty": "2 Years",
              "Price": "$149.99",
              "Financing Options": ["Affirm", "Sezzle"],
              "Return Policy": "60 Days",
              "Shipping Options": ["Standard Shipping", "Priority Shipping"],
              "Manufacturer's Website": "www.zenflex.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Yoga Mats",
            "Yoga Blocks",
            "Yoga Straps",
            "Yoga Bolsters",
            "Yoga Blankets",
            "Pilates Reformer Machines",
            "Pilates Mats",
            "Yoga Wheels",
            "Yoga Towels",
            "Yoga Accessories",
            "Pilates Rings",
            "Yoga Headstands",
            "Pilates Chairs",
            "Yoga Sandbags",
            "Yoga Swings"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 509,
          "name": "Sports Clothing",
          "details": [
            {
              "Brand": "AthletiWear",
              "Type": "Sports Apparel Set",
              "Model": "PerformancePro 5000",
              "Color Options": ["Midnight Black", "Steel Gray", "Crimson Red"],
              "Condition": "Brand New with Tags",
              "Material": "Moisture-Wicking Polyester and Spandex Blend",
              "Size Options": ["XS", "S", "M", "L", "XL"],
              "Sport Types": ["Running", "Gym Workout", "Yoga", "CrossFit"],
              "Gender": "Unisex",
              "Compression Level": "Medium Compression",
              "Breathability": "Ventilated Mesh Panels",
              "Reflective Elements": true,
              "Sun Protection": "UPF 50+",
              "Sweat-Wicking Technology": true,
              "Temperature Regulation": "Thermal Insulation",
              "Seamless Design": true,
              "Stretchability": "4-Way Stretch Fabric",
              "Flatlock Stitching": "Reduced Chafing",
              "Elastic Waistband": "Adjustable and Comfortable",
              "Zipper Pockets": ["Two Side Pockets", "One Back Pocket"],
              "Drawstring Hood": true,
              "Thumbhole Cuffs": true,
              "Logo Placement": "Embroidered Logo on Chest and Leg",
              "Warranty": "1 Year",
              "Price": "$79.99",
              "Financing Options": ["Afterpay", "Quadpay"],
              "Return Policy": "30 Days",
              "Shipping Options": ["Standard Shipping", "Express Shipping"],
              "Manufacturer's Website": "www.athletiwear.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Athletic Shorts",
            "Sports Bras",
            "Running Leggings",
            "Basketball Jerseys",
            "Soccer Jerseys",
            "Cycling Jerseys",
            "Gym Tank Tops",
            "Tennis Skirts",
            "Golf Polo Shirts",
            "Yoga Pants",
            "Baseball Caps",
            "Athletic Socks",
            "Compression Sleeves",
            "Swimwear",
            "Hiking Jackets"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 510,
          "name": "Water Sports Equipment",
          "details": [
            {
              "Brand": "AquaAdventures",
              "Equipment Type": "Water Sports Set",
              "Model": "WaveMaster 3000",
              "Color Options": ["Azure Blue", "Sunset Orange", "Deep Sea Green"],
              "Condition": "Brand New",
              "Watercraft Type": "Inflatable Stand-Up Paddleboard (SUP)",
              "Material": "Durable PVC with Drop Stitch Technology",
              "Size Options": ["10ft", "12ft", "14ft"],
              "Paddle Type": "Adjustable Aluminum Paddle",
              "Life Vest": "US Coast Guard Approved, Adjustable Straps",
              "Snorkel Mask": "Tempered Glass, Dry-Top Snorkel",
              "Wetsuit": "3mm Neoprene Full Wetsuit",
              "Water Shoes": "Quick-Drying, Non-Slip Aqua Shoes",
              "Waterproof Phone Case": "Universal Fit, Touchscreen Friendly",
              "Dry Bag": "Roll-Top Waterproof Dry Bag (20L)",
              "GoPro Mount": true,
              "Leash": "Coiled Leash for Paddleboard",
              "Buoyancy Aid": "Inflatable Safety Buoy",
              "Waterproof Camera": "Underwater Action Camera (4K)",
              "Rash Guard": "Short Sleeve Rash Guard",
              "Surf Wax": "Tropical Temperature Surf Wax",
              "Sunscreen": "Waterproof SPF 50+ Sunscreen",
              "First Aid Kit": "Compact Water Sports First Aid Kit",
              "Warranty": "2 Years",
              "Price": "$699.99",
              "Financing Options": ["PayBright", "Affirm"],
              "Return Policy": "45 Days",
              "Shipping Options": ["Standard Shipping", "Express Shipping"],
              "Manufacturer's Website": "www.aquaadventures.com",
              "Logo": "Embossed Brand Logo"
            }
          ],          
          "subcategories": [
            "Kayaks",
            "Paddleboards",
            "Surfboards",
            "Wetsuits",
            "Life Jackets",
            "Snorkeling Gear",
            "Wakeboards",
            "Water Skis",
            "Towable Tubes",
            "Floating Mats",
            "Diving Masks",
            "Inflatable Boats",
            "Water Trampolines",
            "Fishing Kayaks",
            "Canoeing Gear"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 6,
      "name": "Books & Magazines",
      "subcategories": [
        {
          "id": 601,
          "name": "Fiction Books",
          "details": [
            {
              "Title": "The Mystery of the Enchanted Castle",
              "Author": "Jane Doe",
              "Genre": "Mystery",
              "Publication Year": 2022,
              "Language": "English",
              "Format": "Hardcover",
              "ISBN": "978-1-2345-6789-0",
              "Pages": 320,
              "Publisher": "Imaginary Press",
              "Condition": "Brand New",
              "Price": "$19.99",
              "Bestseller Rank": 152,
              "Series": "Detective Jane Series",
              "Book Dimensions": "6 x 9 inches",
              "Cover Type": "Dust Jacket",
              "Age Group": "Adult",
              "Target Audience": "Mystery Enthusiasts",
              "Setting": "Victorian London",
              "Plot Summary": "Follow Detective Jane as she unravels the mysterious happenings in an enchanted castle.",
              "Themes": ["Mystery", "Intrigue", "Detective Work"],
              "Recommended Age": "18 and above",
              "Award": "Best Mystery Novel 2022"
            }
          ],          
          "subcategories": [
            "Mystery Novels",
            "Science Fiction Books",
            "Romance Novels",
            "Fantasy Books",
            "Historical Fiction",
            "Thriller Novels",
            "Crime Fiction",
            "Adventure Novels",
            "Dystopian Fiction",
            "Contemporary Fiction",
            "Young Adult Fiction",
            "Classic Literature",
            "Erotic Fiction",
            "Short Story Collections",
            "Graphic Novels"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 602,
          "name": "Non-fiction Books",
          "details": [
            {
              "Title": "The Art of Learning: An Inner Journey to Optimal Performance",
              "Author": "Josh Waitzkin",
              "Genre": "Non-fiction",
              "Category": "Personal Development",
              "Publication Year": 2007,
              "Language": "English",
              "Format": "Paperback",
              "ISBN": "978-1-2345-6789-1",
              "Pages": 288,
              "Publisher": "Free Press",
              "Condition": "Brand New",
              "Price": "$15.99",
              "Bestseller Rank": 87,
              "Target Audience": "Adults",
              "Key Topics": ["Learning Strategies", "Personal Growth", "Performance Optimization"],
              "Summary": "Explore the journey of Josh Waitzkin, a chess prodigy and martial arts champion, as he shares insights into the art of learning and achieving optimal performance.",
              "Recommended Age": "18 and above"
            }
          ],          
          "subcategories": [
            "Biographies",
            "Memoirs",
            "Self-Help Books",
            "Business Books",
            "Science Books",
            "History Books",
            "Health & Wellness Books",
            "Cooking & Food Books",
            "Travel Books",
            "Philosophy Books",
            "Psychology Books",
            "True Crime Books",
            "Politics & Current Affairs",
            "Religion & Spirituality",
            "Essays & Literary Criticism"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 603,
          "name": "Magazines",
          "details": [
            {
              "Title": "Vogue",
              "Category": "Fashion Magazines",
              "Publisher": "Condé Nast",
              "Language": "English",
              "Frequency": "Monthly",
              "Format": "Print",
              "Subscription Options": ["One Year", "Two Years", "Single Issue"],
              "Cover Price": "$5.99",
              "Pages": 150,
              "Release Date": "2023-11-01",
              "Condition": "New",
              "Discount": "10% off for subscribers",
              "Target Audience": "Fashion Enthusiasts",
              "Features": ["Latest Fashion Trends", "Celebrity Interviews", "Style Tips"],
              "Editor's Pick": "Exclusive Interview with a Renowned Fashion Designer"
            }
          ],          
          "subcategories": [
            "Fashion Magazines",
            "News Magazines",
            "Science Magazines",
            "Lifestyle Magazines",
            "Technology Magazines",
            "Art & Design Magazines",
            "Travel Magazines",
            "Health & Fitness Magazines",
            "Sports Magazines",
            "Entertainment Magazines",
            "Home & Garden Magazines",
            "Food & Cooking Magazines",
            "Automotive Magazines",
            "Music Magazines",
            "Business Magazines"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 604,
          "name": "Comics & Graphic Novels",
          "details": [
            {
              "Title": "Batman: The Dark Knight Returns",
              "Category": "Graphic Novels",
              "Genre": ["Superhero", "Action", "Drama"],
              "Author": "Frank Miller",
              "Illustrator": "Klaus Janson",
              "Publisher": "DC Comics",
              "Language": "English",
              "Format": "Hardcover",
              "Pages": 224,
              "Release Date": "1986-06-10",
              "Condition": "Brand New",
              "Price": "$19.99",
              "Series": "Batman: The Dark Knight Saga",
              "ISBN": "978-1-4012-3743-8",
              "Target Audience": "Comic Book Fans",
              "Features": ["Iconic Artwork", "Compelling Storyline", "Collector's Edition"],
              "Bestseller Rank": 3,
              "Customer Ratings": 4.8,
              "Number of Reviews": 120
            }
          ],          
          "subcategories": [
            "Superhero Comics",
            "Manga",
            "Graphic Memoirs",
            "Fantasy Comics",
            "Science Fiction Comics",
            "Horror Comics",
            "Historical Comics",
            "Webcomics",
            "Alternative Comics",
            "Slice of Life Comics",
            "Adventure Comics",
            "Romance Comics",
            "Comics for Kids",
            "Graphic Novels for Teens",
            "Adult Graphic Novels"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 605,
          "name": "Educational Books",
          "details": [
            {
              "Title": "The Joy of x: A Guided Tour of Math, from One to Infinity",
              "Category": "Educational Books",
              "Subject": ["Mathematics", "Popular Science"],
              "Author": "Steven Strogatz",
              "Publisher": "Houghton Mifflin Harcourt",
              "Language": "English",
              "Format": "Paperback",
              "Pages": 317,
              "Release Date": "2012-10-02",
              "Condition": "Like New",
              "Price": "$14.99",
              "ISBN": "978-0-547-51765-0",
              "Target Audience": "General Readers, Students",
              "Features": ["Engaging Writing", "Accessible Explanations", "Real-world Applications"],
              "Bestseller Rank": 12,
              "Customer Ratings": 4.5,
              "Number of Reviews": 85
            }
          ],          
          "subcategories": [
            "Textbooks",
            "Reference Books",
            "Study Guides",
            "Educational Workbooks",
            "Language Learning Books",
            "Science Textbooks",
            "Mathematics Books",
            "History Textbooks",
            "Art & Music Education",
            "Computer Science Textbooks",
            "Philosophy Textbooks",
            "Psychology Textbooks",
            "Teaching Resources",
            "Test Preparation Books",
            "Educational Games & Puzzles"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 606,
          "name": "Children's Books",
          "details": [
            {
              "Title": "Where the Wild Things Are",
              "Category": "Children's Books",
              "Genre": ["Picture Book", "Fantasy"],
              "Author": "Maurice Sendak",
              "Illustrator": "Maurice Sendak",
              "Publisher": "Harper & Row",
              "Language": "English",
              "Format": "Hardcover",
              "Pages": 48,
              "Release Date": "1963-04-01",
              "Condition": "Brand New",
              "Price": "$19.99",
              "ISBN": "978-0-06-025492-6",
              "Target Age": "4-8 years",
              "Features": ["Beautiful Illustrations", "Captivating Story", "Timeless Classic"],
              "Bestseller Rank": 5,
              "Customer Ratings": 4.8,
              "Number of Reviews": 120
            }
          ],          
          "subcategories": [
            "Picture Books",
            "Chapter Books",
            "Children's Fiction",
            "Children's Non-fiction",
            "Board Books",
            "Early Reader Books",
            "Middle-Grade Novels",
            "Young Adult Fiction",
            "Children's Fantasy Books",
            "Children's Science Books",
            "Children's History Books",
            "Children's Poetry Books",
            "Children's Educational Books",
            "Interactive Children's Books",
            "Bedtime Stories"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 607,
          "name": "Self-Help Books",
          "details": [
            {
              "Title": "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
              "Category": "Self-Help Books",
              "Author": "James Clear",
              "Publisher": "Avery",
              "Language": "English",
              "Format": "Paperback",
              "Pages": 320,
              "Release Date": "2018-10-16",
              "Condition": "New",
              "Price": "$24.99",
              "ISBN": "978-0735211292",
              "Topics": ["Habit Formation", "Productivity", "Personal Development"],
              "Bestseller Rank": 1,
              "Customer Ratings": 4.9,
              "Number of Reviews": 1500,
              "Features": ["Practical Strategies", "Scientifically Grounded", "Easy to Understand"],
              "Bonus Material": ["Workbook", "Online Resources"],
              "Awards": ["New York Times Bestseller", "Wall Street Journal Bestseller"]
            }
          ],          
          "subcategories": [
            "Personal Development Books",
            "Mindfulness & Meditation",
            "Motivational Books",
            "Relationship Advice",
            "Stress Management",
            "Self-Esteem Books",
            "Happiness & Well-Being",
            "Time Management",
            "Success Principles",
            "Spiritual Self-Help",
            "Financial Self-Help",
            "Health & Wellness",
            "Parenting Self-Help",
            "Workplace Success",
            "Self-Help Journals"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 608,
          "name": "Cookbooks",
          "details": [
            {
              "Title": "The Joy of Cooking",
              "Category": "Cookbooks",
              "Author": "Irma S. Rombauer",
              "Publisher": "Scribner",
              "Language": "English",
              "Format": "Hardcover",
              "Pages": 1200,
              "Release Date": "1931-11-23",
              "Condition": "New",
              "Price": "$39.99",
              "ISBN": "978-1501169717",
              "Cuisine": ["American", "International"],
              "Dietary Restrictions": ["Vegetarian", "Gluten-Free", "Vegan Options"],
              "Recipes": ["Main Dishes", "Desserts", "Baking", "Cocktails"],
              "Customer Ratings": 4.8,
              "Number of Reviews": 1200,
              "Features": ["Time-Tested Recipes", "Comprehensive Cooking Guide"],
              "Bonus Material": ["Cooking Tips", "Meal Planning Ideas"],
              "Awards": ["James Beard Foundation Award", "National Book Award"]
            }
          ],          
          "subcategories": [
            "Healthy Cooking",
            "International Cuisine",
            "Baking & Desserts",
            "Vegetarian & Vegan Cooking",
            "Quick & Easy Recipes",
            "Gourmet Cooking",
            "Cooking for Kids",
            "Cooking Techniques",
            "Celebrity Chef Cookbooks",
            "Slow Cooker Recipes",
            "Instant Pot Cooking",
            "Grilling & BBQ",
            "Cookbooks for Beginners",
            "Holiday & Special Occasions",
            "Cocktail & Mixology Books"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 609,
          "name": "Travel Guides",
          "details": [
            {
              "Title": "Lonely Planet's Ultimate Travel: Our List of the 500 Best Places to See",
              "Category": "Travel Guides",
              "Author": "Lonely Planet",
              "Publisher": "Lonely Planet",
              "Language": "English",
              "Format": "Paperback",
              "Pages": 328,
              "Release Date": "2015-10-06",
              "Condition": "Like New",
              "Price": "$24.99",
              "ISBN": "978-1743607473",
              "Destinations": ["Paris", "Tokyo", "New York City", "Marrakesh", "Sydney"],
              "Travel Themes": ["Adventure", "Cultural Exploration", "Historical Sites"],
              "Maps Included": true,
              "Customer Ratings": 4.7,
              "Number of Reviews": 800,
              "Features": ["Detailed Itineraries", "Local Insider Tips"],
              "Bonus Material": ["Fold-Out Map", "Travel Checklist"],
              "Awards": ["New York Times Bestseller", "Travel Book of the Year"]
            }
          ],          
          "subcategories": [
            "Destination Guides",
            "Travel Memoirs",
            "Adventure Travel Guides",
            "Cultural Exploration",
            "Food & Culinary Guides",
            "Budget Travel Tips",
            "Solo Travel Guides",
            "Family Travel Guides",
            "Hiking & Outdoor Adventure",
            "Road Trip Guides",
            "Luxury Travel",
            "Backpacking Guides",
            "Travel Photography Books",
            "Historical Travel",
            "Travel Essays"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 610,
          "name": "Poetry Books",
          "details": [
            {
              "Title": "The Sun and Her Flowers",
              "Category": "Poetry Books",
              "Author": "Rupi Kaur",
              "Publisher": "Andrews McMeel Publishing",
              "Language": "English",
              "Format": "Hardcover",
              "Pages": 256,
              "Release Date": "2017-10-03",
              "Condition": "Brand New",
              "Price": "$17.99",
              "ISBN": "978-1449486792",
              "Poetry Styles": ["Modern", "Free Verse"],
              "Themes": ["Love", "Loss", "Empowerment"],
              "Illustrations": true,
              "Customer Ratings": 4.5,
              "Number of Reviews": 1200,
              "Features": ["Illustrated Poems", "Emotive Language"],
              "Extras": ["Author's Handwritten Notes Section", "Exclusive Poem"],
              "Awards": ["Goodreads Choice Award for Poetry (2017)"]
            }
          ],          
          "subcategories": [
            "Classic Poetry",
            "Contemporary Poetry",
            "Love Poems",
            "Nature Poetry",
            "Haiku & Micropoetry",
            "Epic Poetry",
            "Narrative Poetry",
            "Experimental Poetry",
            "Spoken Word Poetry",
            "Political Poetry",
            "Social Justice Poetry",
            "Women Poets",
            "African American Poetry",
            "Asian Poetry",
            "Latin American Poetry"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 7,
      "name": "Beauty & Personal Care",
      "subcategories": [
        {
          "id": 701,
          "name": "Skincare",
          "details": [
            {
              "Brand": "GlamourGlow",
              "Product Name": "Radiant Skin Serum",
              "Category": "Beauty & Personal Care",
              "Type": "Facial Serum",
              "Skin Type": "All Skin Types",
              "Ingredients": "Hyaluronic Acid, Vitamin C, Peptides",
              "Usage": "Morning and Evening",
              "Volume": "1 fl oz (30 ml)",
              "Packaging": "Glass Bottle with Dropper",
              "Expiration Date": "2024-12-31",
              "Cruelty-Free": true,
              "Price": "$39.99",
              "Promotions": "Buy One, Get One 50% Off",
              "Customer Ratings": 4.8,
              "Number of Reviews": 1500,
              "Features": "Hydrating, Anti-Aging, Brightening",
              "Best for": "Reducing Fine Lines, Even Skin Tone",
              "Freebies": "Sample Size Night Cream",
              "Return Policy": "30 Days, Unopened and Unused",
              "Manufacturer Warranty": "1 Year"
            }
          ],          
          "subcategories": [
            "Facial Cleansers",
            "Moisturizers",
            "Serums & Essences",
            "Sunscreen & SPF",
            "Anti-Aging Products",
            "Acne Treatments",
            "Toner & Mists",
            "Eye Care Products",
            "Face Masks",
            "Exfoliants & Scrubs",
            "Lip Care Products",
            "Skincare Sets"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 702,
          "name": "Makeup",
          "details": [
            {
              "Brand": "GlamourChic",
              "Product Name": "Velvet Luxe Lipstick",
              "Category": "Makeup",
              "Type": "Lipstick",
              "Shade": "Sultry Red",
              "Finish": "Matte",
              "Formulation": "Cream",
              "Volume": "0.12 oz (3.5 g)",
              "Packaging": "Luxurious Gold Tube",
              "Expiration Date": "2023-10-31",
              "Cruelty-Free": true,
              "Price": "$19.99",
              "Promotions": ["Free Makeup Bag with Purchase"],
              "Customer Ratings": 4.5,
              "Number of Reviews": 1200,
              "Features": ["Long-Lasting", "Highly Pigmented", "Non-Drying"],
              "Best for": ["Everyday Wear", "Special Occasions"],
              "Freebies": ["Sample Size Mascara"],
              "Return Policy": "30 Days, Unopened and Unused",
              "Manufacturer Warranty": "1 Year"
            }
          ],          
          "subcategories": [
            "Foundation & Concealer",
            "Lipstick & Lip Gloss",
            "Eyeshadow & Eyeliner",
            "Mascara & Lashes",
            "Blush & Bronzer",
            "Makeup Brushes & Tools",
            "Makeup Removers",
            "Setting Spray & Powder",
            "Makeup Palettes",
            "Makeup Kits & Sets",
            "Nail Polish",
            "Face Primer",
            "Makeup Bags & Cases",
            "Face Powders",
            "Highlighters"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 703,
          "name": "Haircare",
          "details": [
            {
              "Brand": "SilkenStrands",
              "Product Name": "Revitalizing Shampoo",
              "Category": "Haircare",
              "Hair Type": ["All Hair Types", "Color-Treated Hair"],
              "Volume": "16 fl oz (473 ml)",
              "Packaging": "Recyclable Bottle",
              "Ingredients": ["Aloe Vera Extract", "Argan Oil", "Vitamin E"],
              "Scent": "Citrus Burst",
              "Expiration Date": "2024-05-31",
              "Cruelty-Free": true,
              "Price": "$14.99",
              "Promotions": ["Buy 2, Get 1 Free"],
              "Customer Ratings": 4.8,
              "Number of Reviews": 1500,
              "Features": ["Hydrating", "Sulfate-Free", "Paraben-Free"],
              "Best for": ["Daily Use", "Hydrating Dry Hair"],
              "Freebies": ["Sample Conditioner Packet"],
              "Return Policy": "30 Days, Unopened and Unused",
              "Manufacturer Warranty": "1 Year"
            }
          ],          
          "subcategories": [
            "Shampoo & Conditioner",
            "Hair Styling Products",
            "Hair Treatments & Masks",
            "Hair Oils & Serums",
            "Hair Color Products",
            "Hair Brushes & Combs",
            "Hair Accessories",
            "Hair Dryers & Straighteners",
            "Scalp Care Products",
            "Curling Irons & Wands",
            "Hair Extensions & Wigs",
            "Hair Loss Products",
            "Travel Size Haircare",
            "Men's Haircare",
            "Kids' Haircare"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 704,
          "name": "Fragrances",
          "details": [
            {
              "Brand": "EssenceScents",
              "Product Name": "Enchanting Eau de Parfum",
              "Category": "Fragrances",
              "Fragrance Type": "Floral",
              "Size": "50 ml",
              "Bottle Type": "Glass Spray Bottle",
              "Notes": ["Rose", "Jasmine", "Vanilla"],
              "Longevity": "8 hours",
              "Occasion": ["Evening", "Special Occasions"],
              "Season": "Spring",
              "Gender": "Women",
              "Price": "$49.99",
              "Promotions": ["Free Sample of Body Lotion with Purchase"],
              "Customer Ratings": 4.5,
              "Number of Reviews": 1200,
              "Features": ["Long-Lasting", "Elegant Bottle Design"],
              "Best for": ["Gifts", "Personal Use"],
              "Freebies": ["Body Lotion Sample"],
              "Return Policy": "30 Days, Unopened and Unused",
              "Manufacturer Warranty": "1 Year"
            }
          ],          
          "subcategories": [
            "Perfumes for Women",
            "Colognes for Men",
            "Unisex Fragrances",
            "Perfume Gift Sets",
            "Eau de Parfum",
            "Eau de Toilette",
            "Roll-On Perfumes",
            "Body Sprays",
            "Solid Perfumes",
            "Home Fragrances",
            "Perfume Oils",
            "Travel Size Fragrances",
            "Perfume Samples",
            "Perfume Bottles",
            "Aromatherapy Scents"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 705,
          "name": "Bath & Body",
          "details": [
            {
              "Brand": "PureRelax",
              "Product Name": "Luxurious Lavender Bath Set",
              "Category": "Bath & Body",
              "Type": "Gift Set",
              "Fragrance": "Lavender",
              "Includes": ["Bubble Bath", "Shower Gel", "Body Lotion", "Bath Bombs"],
              "Size": "250 ml (each)",
              "Packaging": "Gift Box",
              "Ingredients": ["Shea Butter", "Vitamin E", "Essential Oils"],
              "Skin Type": ["All Skin Types"],
              "Cruelty-Free": true,
              "Price": "$29.99",
              "Promotions": ["Free Loofah with Purchase"],
              "Customer Ratings": 4.8,
              "Number of Reviews": 1500,
              "Features": ["Moisturizing", "Relaxing Aromatherapy"],
              "Best for": ["Gifts", "Self-Care"],
              "Freebies": ["Loofah"],
              "Return Policy": "30 Days, Unopened and Unused",
              "Manufacturer Warranty": "1 Year"
            }
          ],          
          "subcategories": [
            "Body Wash & Shower Gel",
            "Body Lotions & Creams",
            "Bath Bombs & Bath Salts",
            "Body Scrubs & Exfoliants",
            "Bar Soaps",
            "Hand Creams & Lotions",
            "Deodorants & Antiperspirants",
            "Shaving & Hair Removal",
            "Talcum Powders",
            "Intimate Hygiene Products",
            "Body Sprays & Mists",
            "Foot Care Products",
            "Body Oils",
            "Baby Care Products",
            "Body Sponges & Brushes"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 706,
          "name": "Personal Care Appliances",
          "details": [
            {
              "Brand": "GlowBeauty",
              "Product Name": "Rejuvenate Facial Cleansing Brush",
              "Category": "Beauty & Personal Care",
              "Type": "Facial Cleansing Brush",
              "Material": "Silicone",
              "Power Source": "USB Rechargeable",
              "Waterproof": true,
              "Speed Settings": ["Gentle", "Normal", "Deep Clean"],
              "Usage": "Cleansing, Exfoliating",
              "Timer Function": true,
              "Attachments": ["Sensitive Skin Brush Head", "Exfoliating Brush Head"],
              "Smart Features": ["Bluetooth Connectivity", "Mobile App Integration"],
              "Charging Time": "2 Hours",
              "Runtime": "Up to 30 Days",
              "LED Indicator": true,
              "Travel-Friendly": true,
              "Accessories": ["Charging Cable", "Travel Case"],
              "Price": "$79.99",
              "Promotions": ["Free Exfoliating Brush Head with Purchase"],
              "Customer Ratings": 4.8,
              "Number of Reviews": 1500,
              "Features": ["Gentle on Skin", "Deep Cleansing", "Smart Technology"],
              "Best for": ["Skincare Enthusiasts"],
              "Freebies": ["Exfoliating Brush Head"],
              "Return Policy": "60 Days, Satisfaction Guaranteed",
              "Manufacturer Warranty": "1 Year"
            }
          ],          
          "subcategories": [
            "Electric Toothbrushes",
            "Hair Clippers & Trimmers",
            "Facial Hair Removal",
            "Electric Shavers",
            "Epilators & Waxing",
            "Electric Nail Files",
            "Water Flossers",
            "Hair Dryers",
            "Hair Straighteners",
            "Curling Irons",
            "Men's Grooming Kits",
            "Oral Care Accessories",
            "Replacement Heads",
            "Personal Massagers",
            "Heat Styling Tools"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 707,
          "name": "Men's Grooming",
          "details": [
            {
              "Brand": "GentleManStyle",
              "Product Name": "Precision Beard Trimmer",
              "Category": "Beauty & Personal Care",
              "Type": "Beard Trimmer",
              "Material": "Stainless Steel",
              "Power Source": "Rechargeable Lithium-ion Battery",
              "Waterproof": true,
              "Trimming Lengths": ["0.5mm", "3mm", "5mm", "7mm"],
              "Blade Type": "Titanium-Coated Blades",
              "Adjustable Comb": true,
              "Cordless": true,
              "Runtime": "Up to 90 Minutes",
              "Charging Time": "1 Hour",
              "LED Display": true,
              "Smart Features": ["Digital Display", "Adjustable Settings"],
              "Accessories": ["Cleaning Brush", "Charging Cable", "Travel Pouch"],
              "Price": "$49.99",
              "Promotions": ["Free Travel Pouch with Purchase"],
              "Customer Ratings": 4.5,
              "Number of Reviews": 1200,
              "Features": ["Precision Trimming", "Long Battery Life", "Waterproof"],
              "Best for": ["Beard Maintenance", "Grooming Enthusiasts"],
              "Freebies": ["Travel Pouch"],
              "Return Policy": "30 Days, Money Back Guarantee",
              "Manufacturer Warranty": "2 Years"
            }
          ],          
          "subcategories": [
            "Men's Razors",
            "Shaving Creams & Gels",
            "Aftershave Balms",
            "Beard Care Products",
            "Men's Skincare",
            "Hair Styling Products for Men",
            "Men's Fragrances",
            "Body Wash for Men",
            "Deodorants for Men",
            "Men's Haircare",
            "Men's Grooming Kits",
            "Electric Shavers",
            "Men's Cologne",
            "Men's Accessories",
            "Men's Bath & Body"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 708,
          "name": "Nail Care",
          "details": [
            {
              "Brand": "NailPerfection",
              "Product Name": "Professional Nail Care Kit",
              "Category": "Beauty & Personal Care",
              "Type": "Nail Care Kit",
              "Material": "Stainless Steel",
              "Included Tools": ["Nail Clippers", "Cuticle Scissors", "Nail File", "Cuticle Pusher", "Tweezers"],
              "Handle Material": "Non-slip Rubber",
              "Portable Case": true,
              "Usage": "Home and Professional Use",
              "Features": ["Precision Cutting", "Durable Construction", "Ergonomic Design"],
              "Price": "$19.99",
              "Promotions": ["Free Nail File with Purchase"],
              "Customer Ratings": 4.8,
              "Number of Reviews": 800,
              "Best for": ["Nail Salons", "DIY Nail Care"],
              "Freebies": ["Nail File"],
              "Return Policy": "30 Days, Satisfaction Guaranteed",
              "Manufacturer Warranty": "1 Year"
            }
          ],          
          "subcategories": [
            "Nail Polish",
            "Nail Polish Removers",
            "Nail Treatments & Strengtheners",
            "Nail Files & Buffers",
            "Nail Art & Accessories",
            "Base Coats & Top Coats",
            "Nail Dryers & UV/LED Lamps",
            "Cuticle Care Products",
            "Nail & Cuticle Oils",
            "Nail Glue & Adhesives",
            "Nail Brushes & Tools",
            "Nail Wraps & Stickers",
            "Nail Tips & Extensions",
            "Nail Hardeners",
            "Nail Cleansers & Primers"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 709,
          "name": "Beauty Tools & Accessories",
          "subcategories": [
            "Makeup Brushes & Sets",
            "Beauty Sponges & Blenders",
            "Makeup Mirrors",
            "Cosmetic Bags & Cases",
            "Eyelash Curlers",
            "Tweezers & Brow Tools",
            "Manicure & Pedicure Kits",
            "Makeup Organizers",
            "Brush Cleaners & Tools",
            "Face Rollers & Massagers",
            "Hair Accessories",
            "Beauty Scissors & Shears",
            "Puffs & Cotton Balls",
            "Makeup Brush Holders",
            "Makeup Brush Cleaners"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 710,
          "name": "Beauty Services",
          "details": [
            {
              "Brand": "BeautyEssentials",
              "Product Name": "Complete Beauty Tool Set",
              "Category": "Beauty & Personal Care",
              "Type": "Beauty Tools & Accessories",
              "Included Tools": ["Makeup Brushes", "Eyelash Curler", "Tweezers", "Facial Rollers", "Compact Mirror"],
              "Material": "High-Quality Synthetic Fibers, Stainless Steel, Silicone",
              "Handle Material": "Wood, Plastic",
              "Storage Case": true,
              "Usage": "Daily Makeup Routine",
              "Features": ["Cruelty-Free Brushes", "Anti-Slip Grip", "Travel-Friendly", "Easy to Clean"],
              "Price": "$29.99",
              "Promotions": ["Free Compact Mirror with Purchase"],
              "Customer Ratings": 4.7,
              "Number of Reviews": 1200,
              "Best for": ["Makeup Enthusiasts", "Professional Makeup Artists"],
              "Freebies": ["Compact Mirror"],
              "Return Policy": "30 Days, Satisfaction Guaranteed",
              "Manufacturer Warranty": "1 Year"
            }
          ],          
          "subcategories": [
            "Spa Services",
            "Salon Services",
            "Haircuts & Styling",
            "Facials & Skincare Treatments",
            "Massage Therapy",
            "Nail Services",
            "Waxing & Hair Removal",
            "Makeup Application",
            "Eyelash Extensions",
            "Brow & Lash Services",
            "Tanning Services",
            "Barber Services",
            "Pampering Packages",
            "Bridal Beauty Services",
            "Medical Aesthetics"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 8,
      "name": "Toys & Games",
      "subcategories": [
        {
          "id": 801,
          "name": "Action Figures",
          "details": [
            {
              "Brand": "HeroCollectibles",
              "Product Name": "Superhero Action Figures Set",
              "Category": "Toys & Games",
              "Type": "Action Figures",
              "Character": "Superheroes",
              "Material": "Durable Plastic",
              "Height": "6 inches",
              "Articulation Points": 20,
              "Accessories": ["Interchangeable Hands", "Weapons", "Display Stand"],
              "Recommended Age": "5 years and up",
              "Packaging": "Window Box",
              "Collector's Edition": true,
              "Limited Edition": false,
              "Price": "$24.99",
              "Promotions": ["Buy 2, Get 1 Free"],
              "Customer Ratings": 4.8,
              "Number of Reviews": 1500,
              "Best for": ["Toy Collectors", "Kids who love superheroes"],
              "Theme": "Action and Adventure",
              "Manufacturer": "HeroCollectibles Inc.",
              "Release Date": "2023-03-15",
              "Safety Standards": ["ASTM F963", "EN71"],
              "Packaging Dimensions": "8 x 4 x 2 inches",
              "Weight": "0.5 lbs",
              "Material Care": "Wipe clean with a damp cloth"
            }
          ],          
          "subcategories": [
            "Superhero Action Figures",
            "Sci-Fi Action Figures",
            "Fantasy Action Figures",
            "Anime Action Figures",
            "Collectible Action Figures",
            "Movie Character Figures",
            "Action Figure Playsets",
            "Action Figure Accessories",
            "Action Figure Vehicles"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 802,
          "name": "Board Games",
          "details": [
            {
              "Brand": "StrategicMindGames",
              "Product Name": "Epic Quest Board Game",
              "Category": "Toys & Games",
              "Type": "Board Games",
              "Game Genre": "Fantasy Adventure",
              "Number of Players": "2-6 players",
              "Age Range": "10 years and up",
              "Game Duration": "60-90 minutes",
              "Game Components": ["Game Board", "Rule Book", "Character Cards", "Dice", "Tokens"],
              "Expansion Packs": ["Legendary Lands", "Dark Enchantment"],
              "Recommended for": ["Family Game Nights", "Strategy Enthusiasts"],
              "Price": "$39.99",
              "Promotions": ["Buy 1, Get 50% off on second"],
              "Customer Ratings": 4.7,
              "Number of Reviews": 1200,
              "Best for": ["Family Entertainment", "Game Nights with Friends"],
              "Theme": "Epic Fantasy Quest",
              "Manufacturer": "Strategic Mind Games Co.",
              "Release Date": "2023-04-01",
              "Safety Standards": ["ASTM F963", "EN71"],
              "Box Dimensions": "12 x 12 x 2 inches",
              "Weight": "2 lbs",
              "Care Instructions": "Keep components in the original box when not in use"
            }
          ],          
          "subcategories": [
            "Strategy Board Games",
            "Family Board Games",
            "Party Board Games",
            "Classic Board Games",
            "Cooperative Board Games",
            "Educational Board Games",
            "Card-Based Board Games",
            "Adventure Board Games",
            "Board Game Expansions",
            "Two-Player Board Games"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 803,
          "name": "Puzzles",
          "details": [
            {
              "Brand": "MindBenderPuzzles",
              "Product Name": "Enigma Masterpiece Puzzle",
              "Category": "Toys & Games",
              "Type": "Puzzles",
              "Puzzle Type": "Jigsaw Puzzle",
              "Number of Pieces": 1000,
              "Difficulty Level": "Advanced",
              "Age Range": "12 years and up",
              "Completed Puzzle Dimensions": "24 x 30 inches",
              "Artwork": "Renaissance Collection - 'Mystical Garden'",
              "Special Features": ["Softclick Technology", "Precision-cut Pieces"],
              "Recommended for": ["Puzzle Enthusiasts", "Art Lovers"],
              "Price": "$29.99",
              "Promotions": ["Free Puzzle Mat with purchase"],
              "Customer Ratings": 4.9,
              "Number of Reviews": 1500,
              "Best for": ["Solo Relaxation", "Family Bonding"],
              "Theme": "Artistic and Mystical",
              "Manufacturer": "Mind Bender Puzzles Co.",
              "Release Date": "2023-03-15",
              "Safety Standards": ["ASTM F963", "EN71"],
              "Box Dimensions": "10 x 8 x 2 inches",
              "Weight": "1.5 lbs",
              "Care Instructions": "Store in a cool, dry place to prevent warping"
            }
          ],          
          "subcategories": [
            "Jigsaw Puzzles",
            "3D Puzzles",
            "Wooden Puzzles",
            "Educational Puzzles",
            "Adult Puzzles",
            "Kids' Puzzles",
            "Custom Photo Puzzles",
            "Large Piece Puzzles",
            "Puzzle Accessories"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 804,
          "name": "Video Games",
          "details": [
            {
              "Title": "Galactic Odyssey",
              "Platform": "PlayStation 5",
              "Genre": ["Action", "Adventure", "Sci-Fi"],
              "Publisher": "Stellar Entertainment",
              "Release Date": "2023-05-20",
              "ESRB Rating": "T (Teen)",
              "Game Modes": ["Single Player", "Multiplayer Online"],
              "Players": "1-4 players",
              "Playable Characters": ["Captain Nova", "Luna Explorer", "Cosmic Warrior"],
              "In-Game Currency": "Galactic Credits",
              "Download Size": "50 GB",
              "DLC Available": true,
              "Expansion Packs": ["Starship Armada", "Nebula Conquest"],
              "Virtual Goods": ["Custom Skins", "Enhanced Weapons"],
              "Price": "$59.99",
              "Promotions": ["Exclusive In-Game Item with Purchase"],
              "Customer Ratings": 4.8,
              "Number of Reviews": 2500,
              "Best for": ["Science Fiction Fans", "Action Gamers"],
              "Online Features": ["Leaderboards", "Cooperative Missions"],
              "System Requirements": ["PlayStation 5 Console", "Internet Connection"],
              "Languages": ["English", "Spanish", "French", "German", "Japanese"],
              "Packaging Dimensions": "6.75 x 5.5 x 0.5 inches",
              "Weight": "0.2 lbs",
              "Warranty": "Manufacturer's 90-Day Warranty",
              "Customer Support": "24/7 Online Support"
            }
          ],          
          "subcategories": [
            "Console Games",
            "PC Games",
            "Mobile Games",
            "Virtual Reality Games",
            "Online Multiplayer Games",
            "Adventure Games",
            "Role-Playing Games",
            "Sports Games",
            "Shooter Games",
            "Simulation Games"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 805,
          "name": "Outdoor Play Equipment",
          "details": [
            {
              "Product Name": "Adventure Explorer Playset",
              "Brand": "NatureQuest",
              "Recommended Age": "3-12 years",
              "Material": ["Durable Plastic", "Weather-resistant Metal"],
              "Color Options": ["Green", "Blue", "Red"],
              "Dimensions": "120 x 96 x 84 inches",
              "Weight Capacity": "250 lbs",
              "Assembly Required": true,
              "Included Components": ["Swing Set", "Slide", "Climbing Wall", "Monkey Bars"],
              "Safety Features": ["Non-slip Steps", "Secure Anchoring"],
              "Weather Resistance": "UV-resistant, Waterproof",
              "Maintenance": "Easy to clean with mild soap and water",
              "Certifications": ["ASTM F1148-17 Compliant", "CPSIA Certified"],
              "Warranty": "1-Year Limited Warranty",
              "Price": "$499.99",
              "Customer Ratings": 4.9,
              "Number of Reviews": 1200,
              "Best for": ["Backyard Fun", "Active Play"],
              "Assembly Time": "Approximately 4 hours",
              "Packaging Dimensions": "48 x 24 x 12 inches",
              "Weight": "80 lbs",
              "Customer Support": "Available Monday to Friday, 9 AM - 5 PM",
              "Returns": "30-day Return Policy"
            }
          ],          
          "subcategories": [
            "Swing Sets",
            "Trampolines",
            "Playhouses",
            "Slides & Climbers",
            "Inflatable Bouncers",
            "Outdoor Playsets",
            "Sandbox Toys",
            "Ride-On Toys",
            "Water Play Equipment",
            "Outdoor Sports Equipment"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 806,
          "name": "Educational Toys",
          "details": [
            {
              "Product Name": "Learn & Play Science Lab Kit",
              "Brand": "EduWonders",
              "Recommended Age": "5-10 years",
              "Material": ["Non-toxic Plastic", "Safe Materials"],
              "Color Options": ["Blue", "Yellow", "Green"],
              "Dimensions": "14 x 10 x 5 inches",
              "Weight": "2.5 lbs",
              "Components": ["Microscope", "Test Tubes", "Lab Goggles", "Instruction Booklet"],
              "Educational Focus": ["Chemistry", "Biology", "Physics"],
              "Interactive Features": ["Working Microscope", "Experiments"],
              "Safety Standards": ["ASTM F963-19 Compliant", "CPSIA Certified"],
              "Skills Developed": ["Scientific Exploration", "Critical Thinking", "Hand-Eye Coordination"],
              "Batteries Required": true,
              "Battery Type": "AA (not included)",
              "Price": "$39.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 800,
              "Packaging": "Recyclable",
              "Manufacturer Warranty": "2-Year Limited Warranty",
              "Customer Support": "Available Monday to Friday, 9 AM - 6 PM",
              "Returns": "Easy Returns within 30 days"
            }
          ],          
          "subcategories": [
            "STEM Toys",
            "Science Kits",
            "Math Games",
            "Language Learning Toys",
            "Educational Board Games",
            "Educational Apps",
            "Building Toys",
            "Robotics Kits",
            "Educational Books",
            "Puzzle Games"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 807,
          "name": "Dolls & Dollhouses",
          "details": [
            {
              "Product Name": "Enchanting Dollhouse with Accessories",
              "Brand": "DreamLand Toys",
              "Recommended Age": "3-8 years",
              "Material": ["Wood", "Non-toxic Paints"],
              "Color Options": ["Pink", "Blue", "Purple"],
              "Dimensions": "24 x 18 x 12 inches",
              "Weight": "8 lbs",
              "Included Items": ["Dollhouse", "Furniture Set", "Doll Family"],
              "Features": ["Working Lights", "Open/close Doors", "Balcony"],
              "Assembly Required": true,
              "Assembly Time": "Approximately 1 hour",
              "Skills Developed": ["Imagination", "Creativity", "Fine Motor Skills"],
              "Safety Standards": ["ASTM F963-19 Compliant", "CPSIA Certified"],
              "Price": "$59.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 600,
              "Packaging": "Environmentally Friendly",
              "Manufacturer Warranty": "1-Year Limited Warranty",
              "Customer Support": "Available Monday to Friday, 9 AM - 6 PM",
              "Returns": "Easy Returns within 30 days"
            }
          ],          
          "subcategories": [
            "Fashion Dolls",
            "Barbie Dolls",
            "Baby Dolls",
            "Doll Accessories",
            "Doll Clothing",
            "Dollhouses",
            "Miniature Dolls",
            "Collectible Dolls",
            "Doll Furniture",
            "Doll Playsets"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 808,
          "name": "Building Blocks & Sets",
          "details": [
            {
              "Product Name": "Creative Builders Deluxe Set",
              "Brand": "BuildMaster",
              "Recommended Age": "4-10 years",
              "Material": ["BPA-free Plastic"],
              "Color Options": ["Multicolor"],
              "Pieces": 300,
              "Block Types": ["Standard Bricks", "Wheels", "Doors", "Windows"],
              "Storage Box Included": true,
              "Dimensions (Box)": "12 x 8 x 6 inches",
              "Weight": "2.5 lbs",
              "Features": ["Interlocking Design", "Endless Building Possibilities"],
              "Educational Benefits": ["STEM Learning", "Spatial Awareness", "Problem Solving"],
              "Safety Standards": ["ASTM F963-19 Compliant", "CPSIA Certified"],
              "Price": "$39.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 800,
              "Packaging": "Recyclable",
              "Manufacturer Warranty": "2-Year Limited Warranty",
              "Customer Support": "Available Monday to Friday, 9 AM - 6 PM",
              "Returns": "Easy Returns within 30 days"
            }
          ],          
          "subcategories": [
            "LEGO Sets",
            "Magnetic Building Blocks",
            "Wooden Building Blocks",
            "Construction Toys",
            "Creative Building Sets",
            "Building Block Accessories",
            "Architecture Sets",
            "STEM Building Kits",
            "Building Block Storage"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 809,
          "name": "Remote Control Toys",
          "details": [
            {
              "Product Name": "High-Speed RC Racing Car",
              "Brand": "SpeedMaster",
              "Recommended Age": "8 years and up",
              "Remote Control Frequency": "2.4GHz",
              "Control Range": "100 feet",
              "Top Speed": "25 mph",
              "Battery Type (Car)": "Rechargeable Li-ion",
              "Battery Type (Remote)": "AA Batteries (not included)",
              "Play Time": "20-30 minutes",
              "Charging Time": "2 hours",
              "Color Options": ["Red", "Blue", "Green"],
              "Material": ["Durable ABS Plastic", "Rubber Tires"],
              "Dimensions": "12 x 6 x 4 inches",
              "Weight": "1.5 lbs",
              "Features": ["Responsive Steering", "Shock Absorption", "LED Lights"],
              "Safety Standards": ["CE Certified", "EN71-1-2-3 Compliant"],
              "Price": "$49.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 650,
              "Packaging": "Securely Packaged",
              "Manufacturer Warranty": "1-Year Limited Warranty",
              "Customer Support": "Available 24/7",
              "Returns": "Satisfaction Guaranteed within 30 days"
            }
          ],          
          "subcategories": [
            "RC Cars",
            "RC Drones",
            "RC Helicopters",
            "RC Boats",
            "RC Planes",
            "RC Tanks",
            "RC Trucks",
            "RC Construction Vehicles",
            "RC Robots",
            "RC Accessories"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 810,
          "name": "Arts & Crafts Supplies",
          "details": [
            {
              "Product Name": "Complete Art Kit for Kids",
              "Brand": "CreativityCraft",
              "Recommended Age": "5 years and up",
              "Kit Contents": ["Watercolor Paints", "Colored Pencils", "Markers", "Sketchbook", "Paintbrushes", "Safety Scissors", "Glue Sticks", "Craft Paper"],
              "Material": ["Non-Toxic", "Child-Safe"],
              "Package Dimensions": "14 x 10 x 2 inches",
              "Weight": "2 lbs",
              "Features": ["Vibrant Colors", "Easy to Use", "Variety of Art Supplies"],
              "Includes Instruction Guide": true,
              "Price": "$29.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 450,
              "Packaging": "Colorful and Sturdy Box",
              "Manufacturer Warranty": "100% Satisfaction Guarantee",
              "Customer Support": "Available during business hours",
              "Returns": "Easy Returns within 14 days",
              "Ideal for": ["School Projects", "Creative Play", "Gift for Kids"]
            }
          ],          
          "subcategories": [
            "Painting Supplies",
            "Drawing Supplies",
            "Craft Kits",
            "Art Sets",
            "DIY Jewelry Kits",
            "Craft Paper",
            "Fabric & Textile Crafts",
            "Scrapbooking Supplies",
            "Craft Tools",
            "Art Storage"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 9,
      "name": "Health & Wellness",
      "subcategories": [
        {
          "id": 901,
          "name": "Vitamins & Supplements",
          "details": [
            {
              "Product Name": "Essential Daily Multivitamin",
              "Brand": "WellnessBoost",
              "Formulation": "Tablets",
              "Ingredients": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E", "B Vitamins", "Calcium", "Iron", "Zinc", "Magnesium", "Omega-3 Fatty Acids"],
              "Purpose": "Daily Nutritional Support",
              "Recommended Dosage": "Take 1 tablet daily with a meal",
              "Package Size": "60 Tablets",
              "Serving Size": "1 Tablet",
              "Gluten-Free": true,
              "Non-GMO": true,
              "Vegetarian": true,
              "Expiration Date": "MM/YYYY",
              "Packaging": "Recyclable Bottle",
              "Price": "$19.99",
              "Customer Ratings": 4.9,
              "Number of Reviews": 1200,
              "Manufacturer": "WellnessBoost LLC",
              "Manufacturing Location": "USA",
              "Safety Certifications": ["FDA Approved", "GMP Certified"],
              "Health Benefits": ["Immune Support", "Energy Boost", "Bone Health"],
              "Allergen Information": ["Contains Soy"],
              "Third-Party Testing": true,
              "Additional Notes": "Consult your healthcare professional before use, especially if pregnant, nursing, or taking medications."
            }
          ],          
          "subcategories": [
            "Multivitamins",
            "Minerals",
            "Vitamin C Supplements",
            "Omega-3 Supplements",
            "Probiotics",
            "Herbal Supplements",
            "Immune Support Supplements",
            "Energy Supplements",
            "Weight Management Supplements",
            "Supplement Bundles"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 902,
          "name": "Fitness Accessories",
          "details": [
            {
              "Product Name": "Premium Resistance Bands Set",
              "Brand": "FitFlex",
              "Type": "Resistance Bands",
              "Material": ["Latex", "Nylon"],
              "Resistance Levels": ["Light", "Medium", "Heavy", "Extra Heavy"],
              "Includes": ["5 Resistance Bands", "Door Anchor", "Handles", "Ankle Straps", "Carrying Bag"],
              "Suitable For": ["Home Workouts", "Gym", "Yoga", "Pilates"],
              "Features": ["Durable and Stretchy", "Non-Slip Grip", "Portable", "Versatile"],
              "Color Options": ["Red", "Blue", "Green", "Black"],
              "Dimensions": "12 x 2 inches (each band)",
              "Care Instructions": "Clean with a damp cloth",
              "Price": "$29.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 800,
              "Manufacturer": "FitFlex Accessories Inc.",
              "Warranty": "1 Year Limited Warranty",
              "Packaging": "Recyclable",
              "Additional Notes": "Consult your fitness trainer or healthcare professional before starting any new exercise routine."
            }
          ],          
          "subcategories": [
            "Resistance Bands",
            "Yoga Mats",
            "Dumbbells",
            "Exercise Balls",
            "Jump Ropes",
            "Fitness Trackers",
            "Workout Gloves",
            "Exercise Bikes",
            "Kettlebells",
            "Exercise Bands"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 903,
          "name": "Personal Care Products",
          "details": [
            {
              "Product Name": "Luxury Aromatherapy Bath Bombs Set",
              "Brand": "Relaxation Haven",
              "Type": "Bath Bombs",
              "Scent Options": ["Lavender", "Eucalyptus", "Citrus Burst", "Vanilla Bean"],
              "Ingredients": ["Sodium Bicarbonate", "Citric Acid", "Essential Oils", "Shea Butter"],
              "Skin Type": ["All Skin Types"],
              "Features": ["Fizzing and Relaxing", "Moisturizing", "Natural Ingredients"],
              "Packaging": "Eco-Friendly",
              "Number of Bombs": 6,
              "Usage": "1 bath bomb per bath",
              "Color Options": ["Purple", "Green", "Yellow", "White"],
              "Size": "2.5 inches in diameter (each)",
              "Price": "$24.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 1200,
              "Manufacturer": "Relaxation Haven Ltd.",
              "Warranty": "Not applicable",
              "Cautions": "For external use only. Avoid contact with eyes. If irritation occurs, discontinue use. Keep out of reach of children."
            }
          ],          
          "subcategories": [
            "Skin Care Products",
            "Hair Care Products",
            "Oral Care Products",
            "Bath & Body Products",
            "Deodorants",
            "Shaving & Grooming Products",
            "Feminine Care Products",
            "Men's Grooming Products",
            "Sunscreen & Tanning Products",
            "Incontinence Products"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 904,
          "name": "Health Monitors & Devices",
          "details": [
            {
              "Product Name": "Smart Health Watch Pro",
              "Brand": "VitalTech",
              "Type": "Health Monitor",
              "Features": ["Heart Rate Monitoring", "Sleep Tracking", "Step Counter", "Calorie Burn Tracker"],
              "Compatibility": ["iOS", "Android"],
              "Display": "Color Touchscreen",
              "Water Resistance": "IP68 (Waterproof up to 50m)",
              "Battery Life": "Up to 7 days on a single charge",
              "Sensors": ["ECG", "PPG", "Accelerometer", "Gyroscope"],
              "Health Tracking": ["Blood Pressure", "Blood Oxygen", "Stress Levels"],
              "Connectivity": ["Bluetooth", "Wi-Fi"],
              "Notifications": "Call and Message Alerts",
              "App Compatibility": ["Apple Health", "Google Fit"],
              "Strap Material": "Silicone",
              "Strap Color Options": ["Black", "Blue", "Red", "White"],
              "Size Options": ["Small", "Medium", "Large"],
              "Price": "$129.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 2500,
              "Manufacturer": "VitalTech Innovations",
              "Warranty": "1 Year Limited Warranty",
              "In the Box": ["Smart Health Watch Pro", "Charging Cable", "User Manual"],
              "Safety Compliance": ["CE", "FCC", "RoHS"],
              "Product Dimensions": "1.5 x 1.5 x 0.4 inches",
              "Weight": "0.8 ounces",
              "Additional Features": ["GPS Tracking", "Female Health Tracking", "Customizable Watch Faces"],
              "Cautions": "Not intended for medical use. Consult a healthcare professional for accurate health assessments."
            }
          ],          
          "subcategories": [
            "Blood Pressure Monitors",
            "Fitness Trackers",
            "Thermometers",
            "Heart Rate Monitors",
            "Glucose Monitors",
            "Pedometers",
            "Pulse Oximeters",
            "Smart Scales",
            "Sleep Monitors",
            "Medical Alert Systems"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 905,
          "name": "Natural & Organic Products",
          "details": [
            {
              "Product Name": "Organic Superfood Blend",
              "Brand": "Nature's Harmony",
              "Type": "Dietary Supplement",
              "Ingredients": ["Organic Spirulina", "Chlorella", "Wheatgrass", "Barley Grass", "Alfalfa"],
              "Certifications": ["USDA Organic", "Non-GMO Project Verified", "Vegan", "Gluten-Free"],
              "Packaging": "Compostable Pouch",
              "Serving Size": "1 Scoop (10g)",
              "Servings Per Container": 30,
              "Flavor": "Natural Green",
              "Usage": "Mix with water, juice, or smoothies",
              "Benefits": ["Rich in Vitamins", "Antioxidant Support", "Detoxification", "Immune System Boost"],
              "Storage": "Store in a cool, dry place",
              "Price": "$29.99",
              "Customer Ratings": 4.5,
              "Number of Reviews": 1200,
              "Manufacturer": "Nature's Harmony Wellness Co.",
              "Warranty": "Satisfaction Guaranteed",
              "In the Package": ["Organic Superfood Blend", "Product Information Leaflet"],
              "Product Dimensions": "6 x 4 x 2 inches",
              "Weight": "0.5 lbs",
              "Additional Notes": "Consult with a healthcare professional before adding supplements to your diet, especially if pregnant, nursing, or taking medication."
            }
          ],          
          "subcategories": [
            "Organic Foods",
            "Natural Skin Care",
            "Organic Baby Products",
            "Natural Cleaning Products",
            "Organic Supplements",
            "Natural Pet Care",
            "Eco-Friendly Products",
            "Organic Beauty Products",
            "Non-GMO Foods",
            "Sustainable Living Products"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 906,
          "name": "Health Services",
          "details": [
            {
              "Service Name": "Holistic Wellness Consultation",
              "Provider": "Wellness Harmony Clinic",
              "Service Type": "Individual Session",
              "Duration": "60 minutes",
              "Description": "A comprehensive consultation focusing on holistic health, covering physical, mental, and emotional well-being.",
              "Service Includes": ["Personalized Health Assessment", "Nutritional Guidance", "Stress Management Techniques", "Lifestyle Recommendations"],
              "Certifications": ["Certified Holistic Wellness Practitioner", "Licensed Nutritionist"],
              "Booking Options": ["In-Person", "Virtual/Telehealth"],
              "Price": "$99.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 150,
              "Clinic Location": "123 Wellness Lane, Cityville",
              "Availability": "Monday to Friday, 9:00 AM - 5:00 PM",
              "Accepted Insurance": ["WellnessCare", "HolisticHealth Plan"],
              "Additional Notes": "Please provide any relevant health information before the session. Consultation fees may vary based on additional services."
            }
          ],          
          "subcategories": [
            "Telehealth Services",
            "Medical Consultations",
            "Mental Health Services",
            "Physical Therapy Services",
            "Home Healthcare Services",
            "Wellness Coaching",
            "Nutrition Counseling",
            "Fitness Classes",
            "Alternative Medicine Services",
            "Holistic Health Services"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 907,
          "name": "Weight Management Products",
          "details": [
            {
              "Product Name": "SlimFit Pro Lean Shake",
              "Brand": "Wellness Boost",
              "Product Type": "Meal Replacement Shake",
              "Flavor Options": ["Chocolate", "Vanilla", "Strawberry"],
              "Weight": "2 lbs",
              "Servings per Container": 20,
              "Key Ingredients": ["Whey Protein Isolate", "Fiber Blend", "Vitamins & Minerals"],
              "Usage": "Replace one meal per day for effective weight management",
              "Features": ["Promotes Muscle Building", "Supports Metabolism", "Curbs Appetite"],
              "Allergen Information": ["Contains Milk", "Gluten-Free"],
              "Usage Instructions": "Mix two scoops with water or milk. Shake well and enjoy as a meal replacement.",
              "Price": "$29.99",
              "Customer Ratings": 4.5,
              "Number of Reviews": 200,
              "Manufacturer": "Wellness Boost Nutrition",
              "Additional Notes": "Consult with a healthcare professional before starting any weight management program. Individual results may vary."
            }
          ],          
          "subcategories": [
            "Weight Loss Supplements",
            "Meal Replacement Shakes",
            "Diet Plans",
            "Appetite Suppressants",
            "Fat Burners",
            "Weight Loss Programs",
            "Calorie Counting Tools",
            "Bariatric Surgery Services",
            "Nutritional Counseling",
            "Fitness Programs"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 908,
          "name": "Yoga & Meditation Products",
          "details": [
            {
              "Product Name": "ZenVibes Meditation Cushion",
              "Brand": "SerenityLiving",
              "Product Type": "Meditation Cushion",
              "Color Options": ["Blue", "Gray", "Mauve"],
              "Material": "Organic Cotton",
              "Dimensions": "14'' x 14'' x 6''",
              "Filling": "Buckwheat Hulls",
              "Features": ["Ergonomic Design", "Adjustable Firmness", "Removable Cover"],
              "Ideal For": ["Meditation", "Yoga", "Mindfulness Practices"],
              "Usage Instructions": "Sit comfortably on the cushion with crossed legs during meditation or yoga sessions.",
              "Price": "$39.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 150,
              "Manufacturer": "SerenityLiving Wellness",
              "Additional Notes": "Enhance your meditation experience with this comfortable and supportive cushion. Find your inner peace!"
            }
          ],          
          "subcategories": [
            "Yoga Mats",
            "Meditation Cushions",
            "Yoga Accessories",
            "Meditation Apps",
            "Yoga Apparel",
            "Yoga DVDs",
            "Meditation Books",
            "Yoga Props",
            "Guided Meditation Sessions",
            "Yoga Teacher Training"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 909,
          "name": "Massage & Relaxation Equipment",
          "details": [
            {
              "Product Name": "SootheMaster Electric Massage Chair",
              "Brand": "RelaxXperience",
              "Product Type": "Electric Massage Chair",
              "Color Options": ["Black", "Brown", "Beige"],
              "Massage Techniques": ["Shiatsu", "Kneading", "Rolling", "Air Compression"],
              "Adjustable Intensity Levels": true,
              "Heating Function": true,
              "Built-in Speakers": true,
              "Material": "Premium Leather",
              "Dimensions": "28'' x 30'' x 42''",
              "Weight Capacity": "Up to 300 lbs",
              "User Height Range": "5'2'' to 6'2''",
              "Remote Control": true,
              "Programmable Memory": true,
              "Ideal For": ["Home Use", "Office", "Relaxation Centers"],
              "Assembly Required": true,
              "Price": "$899.99",
              "Customer Ratings": 4.9,
              "Number of Reviews": 200,
              "Manufacturer": "RelaxXperience Wellness",
              "Additional Notes": "Immerse yourself in relaxation with the SootheMaster Massage Chair. Enjoy a spa-like experience in the comfort of your home."
            }
          ],          
          "subcategories": [
            "Massage Chairs",
            "Massage Tables",
            "Massage Oils",
            "Massage Tools",
            "Aromatherapy Diffusers",
            "Foot Massagers",
            "Back Massagers",
            "Hot Stone Massage Kits",
            "Sound Machines",
            "Relaxation Accessories"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 910,
          "name": "Dietary & Nutrition Products",
          "details": [
            {
              "Product Name": "Organic Protein Shake",
              "Brand": "NatureFuel",
              "Product Type": "Protein Powder",
              "Flavor Options": ["Vanilla", "Chocolate", "Strawberry"],
              "Ingredients": ["Organic Whey Protein", "Chia Seeds", "Flaxseed"],
              "Benefits": ["Muscle Building", "Digestive Health"],
              "Certification": "USDA Organic",
              "Serving Size": "30g",
              "Servings Per Container": 20,
              "Price": "$29.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 150,
              "Additional Notes": "Fuel your body with the goodness of organic ingredients in this protein-packed shake."
            }
          ],
          "subcategories": [
            "Protein Supplements",
            "Meal Replacement Powders",
            "Nutritional Drinks",
            "Dietary Snacks",
            "Vegan Nutrition Products",
            "Dietary Supplements",
            "Weight Gain Supplements",
            "Sports Nutrition Products",
            "Nutrition Bars",
            "Digestive Health Supplements"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 10,
      "name": "Home Improvement",
      "subcategories": [
        {
          "id": 1001,
          "name": "Tools & Hardware",
          "details": [
            {
              "Product Name": "PowerMax Drill Kit",
              "Brand": "ProToolTech",
              "Product Type": "Cordless Drill",
              "Power Source": "Lithium-ion Battery",
              "Chuck Size": "1/2 inch",
              "Max Torque": "300 in-lbs",
              "Speed Options": ["Low", "Medium", "High"],
              "Accessories": ["Drill Bits", "Screwdriver Bits", "Carrying Case"],
              "LED Work Light": true,
              "Weight": "3.5 lbs",
              "Warranty": "2 years",
              "Price": "$99.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 120,
              "Manufacturer": "ProToolTech Tools",
              "Additional Notes": "Empower your DIY projects with the PowerMax Drill Kit, versatile and powerful for various applications."
            },
            // Add 24 more products with similar details
          ],          
          "subcategories": [
            "Hand Tools",
            "Power Tools",
            "Tool Sets",
            "Hardware Supplies",
            "Fasteners",
            "Workbenches",
            "Tool Storage",
            "Ladders & Scaffolding",
            "Measuring Tools",
            "Safety Equipment"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1002,
          "name": "Building Materials",
          "details": [
            {
              "Product Name": "Premium Oak Wood Planks",
              "Brand": "BuildCraft",
              "Material Type": "Solid Oak Wood",
              "Size": "1 x 6 inches",
              "Length": "8 feet",
              "Finish": "Smooth Finish",
              "Usage": "Flooring, Wall Paneling, Furniture",
              "Color Options": ["Natural Oak", "Walnut", "Mahogany"],
              "Grade": "Select Grade",
              "Sustainable": true,
              "Weight": "10 lbs",
              "Price": "$5.99 per linear foot",
              "Customer Ratings": 4.9,
              "Number of Reviews": 150,
              "Manufacturer": "BuildCraft Materials",
              "Additional Notes": "Enhance your living spaces with the beauty and durability of Premium Oak Wood Planks."
            },
            // Add 24 more products with similar details
          ],          
          "subcategories": [
            'Wood Planks',
            "Lumber",
            "Cement & Concrete",
            "Bricks & Blocks",
            "Drywall & Sheetrock",
            "Insulation",
            "Roofing Materials",
            "Siding & Trim",
            "Plywood & MDF",
            "Metal Building Materials",
            "Glass & Acrylic"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1003,
          "name": "Home Renovation Services",
          "details": [
            {
              "Service Name": "Complete Kitchen Remodeling",
              "Service Type": "Home Renovation",
              "Description": "Transform your kitchen with our complete remodeling service. Includes new cabinets, countertops, flooring, and appliances.",
              "Duration": "4 weeks",
              "Service Providers": ["Certified Architects", "Experienced Contractors"],
              "Materials Included": false,
              "Guarantee": true,
              "Price Range": "$15,000 - $30,000",
              "Customer Ratings": 4.8,
              "Number of Reviews": 50,
              "Service Provider": "RenovateRight Homes",
              "Additional Notes": "Create the kitchen of your dreams with our professional remodeling services."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            "General Contractors",
            "Home Remodeling",
            "Kitchen Renovation",
            "Bathroom Remodeling",
            "Basement Finishing",
            "Roof Repair & Replacement",
            "Flooring Installation",
            "Window Replacement",
            "Painting Services",
            "Plumbing Services"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1004,
          "name": "Electrical & Plumbing",
          "details": [
            {
              "Service Name": "Electrical Wiring Installation",
              "Service Type": "Electrical",
              "Description": "Professional installation of electrical wiring for homes and commercial buildings.",
              "Duration": "2 weeks",
              "Service Providers": ["Licensed Electricians", "Certified Inspectors"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$2,000 - $8,000",
              "Customer Ratings": 4.9,
              "Number of Reviews": 75,
              "Service Provider": "PowerConnect Electric",
              "Additional Notes": "Ensure the safety and efficiency of your electrical system with our expert wiring installation."
            },
            // Add 23 more services with similar details
          ],
          "subcategories": [
            "Electrical Wiring",
            "Light Fixtures",
            "Electrical Panels",
            "Plumbing Fixtures",
            "Pipes & Fittings",
            "Water Heaters",
            "Sump Pumps",
            "Electrical Outlets",
            "Ceiling Fans",
            "Bathroom Plumbing"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1005,
          "name": "Painting & Decorating",
          "details": [
            {
              "Service Name": "Interior Painting",
              "Service Type": "Painting & Decorating",
              "Description": "Enhance the aesthetics of your interiors with professional painting services.",
              "Duration": "1 week",
              "Service Providers": ["Experienced Painters", "Color Consultants"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$1,500 - $5,000",
              "Customer Ratings": 4.8,
              "Number of Reviews": 50,
              "Service Provider": "ColorCraft Interiors",
              "Additional Notes": "Transform your living spaces with a fresh coat of paint tailored to your style and preferences."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            "Interior Paint",
            "Exterior Paint",
            "Paint Brushes & Rollers",
            "Painting Supplies",
            "Wallpaper",
            "Stencils & Decals",
            "Caulk & Sealants",
            "Paint Sprayers",
            "Decorative Lighting",
            "Wall Art"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1006,
          "name": "Flooring & Tiles",
          "details": [
            {
              "Service Name": "Hardwood Flooring Installation",
              "Service Type": "Flooring & Tiles",
              "Description": "Upgrade your space with the timeless beauty of hardwood flooring.",
              "Duration": "2 weeks",
              "Service Providers": ["Skilled Flooring Installers", "Flooring Consultants"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$2,000 - $8,000",
              "Customer Ratings": 4.9,
              "Number of Reviews": 75,
              "Service Provider": "TimberCraft Floors",
              "Additional Notes": "Experience the warmth and elegance of hardwood floors expertly installed for lasting beauty."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            "Hardwood Flooring",
            "Laminate Flooring",
            "Tile Flooring",
            "Vinyl Flooring",
            "Carpet & Rugs",
            "Flooring Accessories",
            "Tile Adhesives & Mortar",
            "Flooring Underlayment",
            "Grout & Tile Tools",
            "Floor Cleaners"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1007,
          "name": "Heating & Cooling",
          "details": [
            {
              "Service Name": "Central Air Conditioning Installation",
              "Service Type": "Heating & Cooling",
              "Description": "Keep your home cool and comfortable with a central air conditioning system.",
              "Duration": "1 week",
              "Service Providers": ["HVAC Experts", "Air Conditioning Technicians"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$3,000 - $10,000",
              "Customer Ratings": 4.8,
              "Number of Reviews": 90,
              "Service Provider": "CoolBreeze HVAC Solutions",
              "Additional Notes": "Enjoy energy-efficient cooling and precise temperature control with our central AC installations."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            "Furnaces",
            "Air Conditioners",
            "Heat Pumps",
            "Ductless Mini-Split Systems",
            "Thermostats",
            "Fireplaces & Stoves",
            "Air Purifiers",
            "HVAC Filters",
            "Ventilation Systems",
            "Humidifiers"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1008,
          "name": "Windows & Doors",
          "details": [
            {
              "Service Name": "Custom Window Installation",
              "Service Type": "Windows & Doors",
              "Description": "Upgrade your home with custom-designed windows for improved aesthetics and energy efficiency.",
              "Duration": "2 weeks",
              "Service Providers": ["Window Designers", "Installation Experts"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$2,000 - $8,000",
              "Customer Ratings": 4.9,
              "Number of Reviews": 110,
              "Service Provider": "Elegance Windows & Doors",
              "Additional Notes": "Enhance natural light and ventilation with our high-quality custom window installations."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            "Windows",
            "Exterior Doors",
            "Interior Doors",
            "Garage Doors",
            "Window Treatments",
            "Door Hardware",
            "Window Screens",
            "Weatherstripping",
            "Pet Doors",
            "Security Doors"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1009,
          "name": "Roofing & Gutters",
          "details": [
            {
              "Service Name": "Roof Replacement",
              "Service Type": "Roofing & Gutters",
              "Description": "Upgrade your roof with durable and weather-resistant materials for enhanced protection.",
              "Duration": "3 weeks",
              "Service Providers": ["Roofing Specialists", "Gutter Installation Experts"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$5,000 - $15,000",
              "Customer Ratings": 4.8,
              "Number of Reviews": 90,
              "Service Provider": "Guardian Roofing Solutions",
              "Additional Notes": "Ensure long-lasting protection for your home by replacing your roof with our premium materials."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            "Roof Shingles",
            "Metal Roofing",
            "Roof Underlayment",
            "Gutter Systems",
            "Roof Sealants",
            "Roofing Nails",
            "Chimney Caps",
            "Eavestroughs",
            "Roof Flashing",
            "Gutter Guards"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1010,
          "name": "Home Security Systems",
          "details": [
            {
              "Service Name": "Smart Home Security Installation",
              "Service Type": "Home Security Systems",
              "Description": "Enhance your home security with the latest smart technology and surveillance systems.",
              "Duration": "2 days",
              "Service Providers": ["Security System Installers", "Smart Home Integration Experts"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$1,500 - $5,000",
              "Customer Ratings": 4.9,
              "Number of Reviews": 120,
              "Service Provider": "SecureHome Solutions",
              "Additional Notes": "Secure your property with cutting-edge technology, surveillance cameras, and smart access controls."
            },
            // Add 24 more services with similar details
          ],          
          "subcategories": [
            "Security Cameras",
            "Smart Doorbells",
            "Motion Sensors",
            "Alarm Systems",
            "Smart Locks",
            "Surveillance Systems",
            "Home Security Apps",
            "Security Lighting",
            "Video Door Phones",
            "Security Monitoring Services"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 11,
      "name": "Pets & Animals",
      "subcategories": [
        {
          "id": 1101,
          "name": "Pet Food & Supplies",
          "details": [
            {
              "Product Name": "Premium Dog Food",
              "Brand": "PetDelight",
              "Product Type": "Dry Dog Food",
              "Flavor Options": ["Chicken", "Beef", "Salmon"],
              "Ingredients": ["Real Meat", "Whole Grains", "Vegetables"],
              "Benefits": ["Healthy Coat", "Joint Support", "Digestive Health"],
              "Weight": "20 lbs",
              "Price": "$39.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 200,
              "Manufacturer": "PetDelight Nutrition",
              "Additional Notes": "Nourish your dog with a balanced diet to keep them happy and healthy."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Dog Food",
            "Cat Food",
            "Small Pet Food",
            "Bird Food",
            "Reptile Food",
            "Fish Food",
            "Pet Treats",
            "Pet Bowls & Feeders",
            "Pet Carriers",
            "Pet Beds"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1102,
          "name": "Pet Accessories",
          "subcategories": [
            "Pet Collars & Leashes",
            "Pet Toys",
            "Pet Apparel",
            "Pet ID Tags",
            "Pet Grooming Tools",
            "Pet Training Aids",
            "Pet Car Accessories",
            "Pet Travel Gear",
            "Pet Safety Products",
            "Pet Strollers"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1103,
          "name": "Pet Services",
          "details": [
            {
              "Product Name": "Cozy Pet Bed",
              "Brand": "SnugglePaws",
              "Product Type": "Dog Bed",
              "Size Options": ["Small", "Medium", "Large"],
              "Color Options": ["Blue", "Pink", "Gray"],
              "Material": "Soft Plush Fabric",
              "Washable": true,
              "Non-Slip Bottom": true,
              "Price": "$24.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 150,
              "Manufacturer": "SnugglePaws Comfort",
              "Additional Notes": "Give your furry friend the perfect place to rest with our cozy and stylish pet bed."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Pet Boarding",
            "Pet Grooming Services",
            "Pet Training Classes",
            "Veterinary Care",
            "Pet Sitting Services",
            "Pet Adoption Services",
            "Pet Dental Care",
            "Pet Insurance",
            "Pet Transport Services",
            "Pet Cremation Services"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1104,
          "name": "Pets for Adoption",
          "details": [
            {
              "Pet Type": "Dog",
              "Breed": "Labrador Retriever",
              "Age": "2 years",
              "Color": "Golden",
              "Size": "Large",
              "Vaccination Status": "Up to date",
              "Spayed/Neutered": true,
              "Personality Traits": ["Friendly", "Energetic", "Loyal"],
              "Adoption Fee": "$150",
              "Available for Adoption": true,
              "Rescue Organization": "Hopeful Tails Rescue",
              "Contact Information": "info@hopefultailsrescue.org",
              "Additional Notes": "Meet your new best friend! This lovable Labrador is looking for a forever home. Contact us for adoption details."
            },
            // Add 24 more pets with similar details
          ],
          "subcategories": [
            "Dogs for Adoption",
            "Cats for Adoption",
            "Small Pets for Adoption",
            "Birds for Adoption",
            "Reptiles for Adoption",
            "Fish for Adoption",
            "Rescue Animals",
            "Shelter Pets",
            "Adoption Events",
            "Pet Foster Programs"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1105,
          "name": "Livestock",
          "details": [
            {
              "Livestock Type": "Dairy Cows",
              "Breed": "Holstein",
              "Age": "2-5 years",
              "Quantity Available": 10,
              "Milk Production": "20-30 liters per day",
              "Vaccination Status": "Up to date",
              "Price per Head": "$1,500",
              "Delivery Options": ["Local Pickup", "Shipping Available"],
              "Seller Contact": "farmersdairy@example.com",
              "Additional Notes": "Healthy Holstein dairy cows available for purchase. Ideal for dairy farming operations. Contact us for bulk discounts."
            },
            // Add 24 more livestock entries with similar details
          ],
          "subcategories": [
            "Cattle",
            "Horses",
            "Sheep & Goats",
            "Poultry",
            "Swine",
            "Exotic Livestock",
            "Livestock Feed",
            "Livestock Equipment",
            "Livestock Health",
            "Livestock Auctions"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1106,
          "name": "Pet Care & Grooming",
          "details": [
            {
              "Product Name": "Luxury Pet Grooming Kit",
              "Brand": "PamperPets",
              "Pet Type": "Dogs",
              "Grooming Tools": ["Slicker Brush", "Nail Clippers", "Comb", "Scissors"],
              "Grooming Products": ["Shampoo", "Conditioner", "Deodorizing Spray"],
              "Suitable Breeds": ["All Breeds"],
              "Package Includes": ["Grooming Tools", "Products", "Stylish Carry Case"],
              "Material": "Stainless Steel, Natural Ingredients",
              "Price": "$49.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 100,
              "Seller Contact": "pamperpets@example.com",
              "Additional Notes": "Give your furry friend the spa treatment they deserve with our premium pet grooming kit. Perfect for all dog breeds."
            },
            // Add 24 more pet care and grooming product entries with similar details
          ],
          "subcategories": [
            "Pet Grooming Supplies",
            "Pet Shampoos & Conditioners",
            "Pet Brushes & Combs",
            "Pet Nail Clippers",
            "Pet Dental Care Products",
            "Pet Hair Clippers",
            "Pet Ear & Eye Care",
            "Pet Skin Care",
            "Flea & Tick Control",
            "Pet First Aid Kits"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1107,
          "name": "Pet Toys & Entertainment",
          "subcategories": [
            "Dog Toys",
            "Cat Toys",
            "Small Pet Toys",
            "Bird Toys",
            "Reptile Toys",
            "Fish Tank Decorations",
            "Interactive Pet Toys",
            "Chew Toys",
            "Puzzle Toys",
            "Feather Wands"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1108,
          "name": "Pet Training & Behavior",
          "details": [
            {
              "Product Name": "Smart Pet Training Collar",
              "Brand": "TrainTech",
              "Pet Type": "Dogs",
              "Training Modes": ["Static Stimulation", "Vibration", "Sound"],
              "Range": "Up to 1000 feet",
              "Waterproof": true,
              "Battery Life": "Up to 14 days",
              "Adjustable Collar Size": true,
              "Suitable Breeds": ["Medium to Large Breeds"],
              "Price": "$59.99",
              "Customer Ratings": 4.6,
              "Number of Reviews": 120,
              "Seller Contact": "traintech@example.com",
              "Additional Notes": "Train your dog with ease using our smart pet training collar. Choose from various modes for effective and humane training."
            },
            // Add 24 more pet training and behavior product entries with similar details
          ],
          "subcategories": [
            "Dog Training Aids",
            "Cat Training Products",
            "Pet Clickers & Whistles",
            "Pet Training Pads",
            "Pet Repellents",
            "Bark Control Devices",
            "Litter Training Supplies",
            "Pet Behavior Books",
            "Pet Training Classes",
            "Behavioral Consultations"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1109,
          "name": "Pet Health & Wellness",
          "details": [
            {
              "Product Name": "Premium Grain-Free Dog Food",
              "Brand": "HealthyPaws",
              "Pet Type": "Dogs",
              "Flavor Options": ["Chicken & Sweet Potato", "Salmon & Pea", "Beef & Carrot"],
              "Ingredients": ["Real Meat", "Vegetables", "Probiotics"],
              "Grain-Free": true,
              "Weight": "10 lbs",
              "Life Stage": "All Life Stages",
              "Price": "$39.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 150,
              "Seller Contact": "healthypaws@example.com",
              "Additional Notes": "Provide your furry friend with a nutritious and delicious meal. Our grain-free dog food supports overall health and vitality."
            },
            // Add 24 more pet health and wellness product entries with similar details
          ],
          "subcategories": [
            "Pet Vitamins & Supplements",
            "Pet Medications",
            "Pet Health Monitors",
            "Pet Allergy Relief",
            "Pet Dental Care",
            "Joint Health Supplements",
            "Pet Calming Aids",
            "Digestive Health Products",
            "Pet Weight Management",
            "Pet Senior Care"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1110,
          "name": "Pet Collars & Leashes",
          "details": [
            {
              "Product Name": "Reflective Nylon Dog Collar",
              "Brand": "SafeWalk",
              "Pet Type": "Dogs",
              "Size Options": ["Small", "Medium", "Large"],
              "Color Options": ["Red", "Blue", "Green"],
              "Material": "Durable Nylon",
              "Reflective Feature": true,
              "Adjustable Length": true,
              "Price": "$12.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 120,
              "Seller Contact": "safewalk@example.com",
              "Additional Notes": "Ensure the safety of your dog during walks with our reflective nylon collar. Adjustable and available in various sizes and colors."
            },
            // Add 24 more pet collar and leash product entries with similar details
          ],
          "subcategories": [
            "Dog Collars",
            "Cat Collars",
            "Small Pet Collars",
            "Leashes & Leads",
            "Retractable Leashes",
            "Harnesses",
            "Martingale Collars",
            "Breakaway Collars",
            "Personalized Pet Collars",
            "Designer Pet Collars"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 12,
      "name": "Art & Collectibles",
      "subcategories": [
        {
          "id": 1201,
          "name": "Paintings",
          "details": [
            {
              "Artwork Title": "Sunset Serenity",
              "Artist": "Emily Canvas",
              "Art Style": "Impressionism",
              "Medium": "Oil on Canvas",
              "Size": "24'' x 36''",
              "Color Palette": ["Warm Tones", "Soft Blues"],
              "Frame Included": false,
              "Signed by Artist": true,
              "Price": "$499.99",
              "Customer Ratings": 4.9,
              "Number of Reviews": 150,
              "Seller Contact": "emilycanvas@example.com",
              "Additional Notes": "Immerse yourself in the serenity of a sunset with this impressionist oil painting. Each stroke reflects the artist's unique style and vision."
            },
            // Add 24 more painting entries with similar details
          ],
          "subcategories": [
            "Oil Paintings",
            "Watercolor Paintings",
            "Acrylic Paintings",
            "Canvas Art",
            "Abstract Paintings",
            "Portrait Paintings",
            "Landscape Paintings",
            "Modern Art",
            "Contemporary Art",
            "Famous Artist Reproductions"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1202,
          "name": "Antiques",
          "details": [
            {
              "Item Name": "Vintage Brass Telescope",
              "Origin": "19th Century, England",
              "Material": "Brass",
              "Dimensions": "18'' when closed, extends to 36''",
              "Condition": "Excellent",
              "Provenance": "Acquired from a private collector",
              "Certificate of Authenticity": true,
              "Price": "$799.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 120,
              "Seller Contact": "antiquecollector@example.com",
              "Additional Notes": "Own a piece of history with this vintage brass telescope from the 19th century. Excellent condition and comes with a certificate of authenticity."
            },
            // Add 24 more antique entries with similar details
          ],
          "subcategories": [
            "Furniture Antiques",
            "Jewelry Antiques",
            "Clocks & Watches",
            "China & Porcelain",
            "Collectible Coins",
            "Vintage Clothing",
            "Rare Books & Manuscripts",
            "Ancient Artifacts",
            "Decorative Arts",
            "Automobilia"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1203,
          "name": "Collectible Items",
          "details": [
            {
              "Item Name": "Rare Coin Collection",
              "Origin": "Various, Worldwide",
              "Materials": ["Gold", "Silver", "Copper"],
              "Years": ["18th Century", "19th Century", "20th Century"],
              "Condition": "Uncirculated",
              "Provenance": "Private Collection",
              "Certificate of Authenticity": true,
              "Price": "$1,499.99",
              "Customer Ratings": 4.9,
              "Number of Reviews": 150,
              "Seller Contact": "collectibles@example.com",
              "Additional Notes": "Explore the world of numismatics with this rare coin collection featuring coins from various countries and centuries. All coins are in uncirculated condition and come with a certificate of authenticity."
            },
            // Add 24 more collectible item entries with similar details
          ],
          "subcategories": [
            "Figurines",
            "Collectible Dolls",
            "Sports Memorabilia",
            "Movie & TV Collectibles",
            "Music Memorabilia",
            "Toys & Games Collectibles",
            "Comic Book Collectibles",
            "Historical Documents",
            "Political Memorabilia",
            "Advertising Collectibles"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1204,
          "name": "Sculptures",
          "details": [
            {
              "Sculpture Name": "Eternal Harmony",
              "Artist": "Alicia Sculptor",
              "Material": "Bronze",
              "Style": "Abstract Contemporary",
              "Dimensions": "24'' x 12'' x 8''",
              "Weight": "15 lbs",
              "Color": "Verdigris Patina",
              "Limited Edition": true,
              "Certificate of Authenticity": true,
              "Price": "$2,499.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 120,
              "Seller Contact": "sculptures@example.com",
              "Additional Notes": "Experience the essence of eternal harmony with this exquisite bronze sculpture crafted by the renowned artist Alicia Sculptor. Limited edition with a certificate of authenticity."
            },
            // Add 24 more sculpture entries with similar details
          ], 
          "subcategories": [
            "Bronze Sculptures",
            "Stone Sculptures",
            "Wooden Sculptures",
            "Abstract Sculptures",
            "Figurative Sculptures",
            "Outdoor Sculptures",
            "Modern Sculptures",
            "Contemporary Sculptures",
            "Sculpture Reproductions",
            "Kinetic Sculptures"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1205,
          "name": "Fine Art Prints",
          "details": [
            {
              "Print Name": "Mystic Moonlight",
              "Artist": "Elena Painter",
              "Art Style": "Impressionism",
              "Print Type": "Giclée Print",
              "Paper Type": "Archival Matte",
              "Print Dimensions": "18'' x 24''",
              "Limited Edition": false,
              "Signed": true,
              "Price": "$149.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 90,
              "Seller Contact": "prints@example.com",
              "Additional Notes": "Bring the enchantment of 'Mystic Moonlight' into your space with this beautiful Giclée print by the talented artist Elena Painter. Each print is signed and carefully crafted on archival matte paper."
            },
            // Add 24 more fine art print entries with similar details
          ],
          "subcategories": [
            "Limited Edition Prints",
            "Lithographs",
            "Etchings",
            "Screen Prints",
            "Giclee Prints",
            "Photographic Prints",
            "Digital Art Prints",
            "Art Posters",
            "Vintage Prints",
            "Custom Art Prints"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1206,
          "name": "Photography Art",
          "details": [
            {
              "Artwork Title": "Urban Reflections",
              "Photographer": "Alex Lensman",
              "Photography Style": "Cityscape",
              "Print Type": "Canvas Print",
              "Canvas Size": "24'' x 36''",
              "Limited Edition": true,
              "Signed": false,
              "Price": "$199.99",
              "Customer Ratings": 4.9,
              "Number of Reviews": 120,
              "Seller Contact": "photography@example.com",
              "Additional Notes": "Immerse yourself in the dynamic energy of the city with 'Urban Reflections,' a captivating cityscape captured by the talented photographer Alex Lensman. This canvas print is perfect for bringing the urban vibe into your living space."
            },
            // Add 24 more photography art entries with similar details
          ],
          "subcategories": [
            "Photographic Prints",
            "Black and White Photography",
            "Color Photography",
            "Nature Photography",
            "Portrait Photography",
            "Fine Art Photography",
            "Street Photography",
            "Photography Books",
            "Photography Equipment",
            "Photo Frames"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1207,
          "name": "Pottery & Ceramics",
          "details": [
            {
              "Artwork Title": "Earthen Elegance Vase",
              "Artist": "Sophia Claycraft",
              "Art Medium": "Handcrafted Clay",
              "Style": "Modern Minimalist",
              "Color Options": ["Earthen Brown", "Sage Green", "Sky Blue"],
              "Height": "12 inches",
              "Diameter": "8 inches",
              "Limited Edition": false,
              "Signed": true,
              "Price": "$89.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 80,
              "Seller Contact": "pottery@example.com",
              "Additional Notes": "Bring a touch of nature indoors with the 'Earthen Elegance Vase' by Sophia Claycraft. This handcrafted clay vase showcases modern minimalist design and is available in various earthy tones to complement any decor style."
            },
            // Add 24 more pottery and ceramics art entries with similar details
          ],
          "subcategories": [
            "Pottery Bowls & Vases",
            "Ceramic Sculptures",
            "Porcelain Figurines",
            "Stoneware Pottery",
            "Handcrafted Ceramics",
            "Raku Pottery",
            "Vintage Pottery",
            "Ceramic Tiles",
            "Pottery Tools",
            "Ceramic Glazes"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1208,
          "name": "Vintage Collectibles",
          "details": [
            {
              "Item Name": "Vintage Vinyl Record Player",
              "Brand": "Harmony Electronics",
              "Type": "Turntable",
              "Material": "Wood and Metal",
              "Color": "Mahogany",
              "Condition": "Excellent",
              "Year of Manufacture": 1960,
              "Limited Edition": true,
              "Price": "$299.99",
              "Customer Ratings": 4.9,
              "Number of Reviews": 120,
              "Seller Contact": "vintage@example.com",
              "Additional Notes": "Experience the nostalgia of the past with this vintage vinyl record player from Harmony Electronics. The classic design and warm mahogany finish make it a perfect addition to any collector's treasure trove."
            },
            // Add 24 more vintage collectibles entries with similar details
          ],
          "subcategories": [
            "Vintage Toys",
            "Retro Clothing",
            "Collectible Coins",
            "Vintage Jewelry",
            "Retro Electronics",
            "Antique Furniture",
            "Retro Decor",
            "Classic Cars",
            "Vinyl Records",
            "Vintage Posters"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1209,
          "name": "Comic Books & Memorabilia",
          "details": [
            {
              "Comic Title": "The Amazing Spider-Man #1",
              "Publisher": "Marvel Comics",
              "Release Year": 1963,
              "Writer": "Stan Lee",
              "Artist": "Steve Ditko",
              "Condition": "Near Mint",
              "Variant Cover": false,
              "Signed by": "Stan Lee",
              "Price": "$10,000.00",
              "Customer Ratings": 5.0,
              "Number of Reviews": 50,
              "Seller Contact": "comics@example.com",
              "Additional Notes": "Own a piece of comic book history with this near-mint condition copy of The Amazing Spider-Man #1. Written by Stan Lee and featuring iconic artwork by Steve Ditko, this issue marked the beginning of Spider-Man's solo adventures in his own title."
            },
            // Add 24 more comic books and memorabilia entries with similar details
          ],
          "subcategories": [
            "Comic Books",
            "Comic Art",
            "Comic Collectibles",
            "Superhero Memorabilia",
            "Comic Book Posters",
            "Comic Book Statues",
            "Comic Book Grading",
            "Signed Comics",
            "Comic Book Storage",
            "Comic Book Bags & Boards"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1210,
          "name": "Coins & Stamps",
          "details": [
            {
              "Item Name": "1854 Liberty Head Gold Coin",
              "Type": "Gold Coin",
              "Denomination": "$20 Double Eagle",
              "Mint Year": 1854,
              "Mint Mark": "S",
              "Grade": "AU-55",
              "Certification": "NGC",
              "Price": "$5,000.00",
              "Customer Ratings": 4.9,
              "Number of Reviews": 30,
              "Seller Contact": "coins@example.com",
              "Additional Notes": "A rare 1854 Liberty Head Gold Coin, graded AU-55 by NGC. This $20 Double Eagle features the 'S' mint mark from the San Francisco Mint. A valuable addition to any coin collector's portfolio."
            },
            // Add 24 more coins and stamps entries with similar details
          ],
          "subcategories": [
            "Collectible Coins",
            "Coin Sets",
            "Rare Stamps",
            "Stamp Collections",
            "Coin Albums & Holders",
            "Coin Grading",
            "Stamp Albums",
            "Stamp Supplies",
            "World Coins",
            "Gold Coins"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 13,
      "name": "Food & Beverages",
      "subcategories": [
        {
          "id": 1301,
          "name": "Groceries",
          "details": [
            {
              "Product Name": "Organic Whole Grain Pasta",
              "Brand": "Nature's Best",
              "Category": "Pasta",
              "Variety": "Whole Grain",
              "Weight": "16 oz",
              "Ingredients": ["Organic Durum Wheat Semolina"],
              "Nutritional Information": {
                "Calories": 200,
                "Protein": 8,
                "Carbohydrates": 42,
                "Fat": 1,
                "Fiber": 5
              },
              "Price": "$2.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 50,
              "Seller Contact": "groceries@example.com",
              "Additional Notes": "Nature's Best Organic Whole Grain Pasta is a healthy and delicious choice for your favorite pasta dishes. Made from high-quality organic durum wheat semolina for a wholesome meal."
            },
            // Add 24 more grocery entries with similar details
          ],   
          "subcategories": [
            "Canned Goods",
            "Dry Goods",
            "Fresh Produce",
            "Dairy Products",
            "Frozen Foods",
            "Pantry Staples",
            "Baking Supplies",
            "Snack Foods",
            "Beverages",
            "International Foods"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1302,
          "name": "Beverages",
          "details": [
            {
              "Product Name": "Sparkling Citrus Lemonade",
              "Brand": "RefreshLife",
              "Category": "Beverages",
              "Flavor": "Citrus Lemonade",
              "Volume": "16 fl oz",
              "Ingredients": ["Filtered Water", "Organic Lemon Juice", "Cane Sugar"],
              "Nutritional Information": {
                "Calories": 80,
                "Total Sugars": 18,
                "Sodium": 5,
                "Carbonation": "Yes"
              },
              "Price": "$1.99",
              "Customer Ratings": 4.5,
              "Number of Reviews": 30,
              "Seller Contact": "beverages@example.com",
              "Additional Notes": "RefreshLife Sparkling Citrus Lemonade is a delightful and refreshing beverage made with organic lemon juice and cane sugar. Perfect for any occasion."
            },
            // Add 24 more beverage entries with similar details
          ],
          "subcategories": [
            "Soft Drinks",
            "Juices",
            "Sports & Energy Drinks",
            "Coffee",
            "Tea",
            "Alcoholic Beverages",
            "Water",
            "Soda",
            "Milk",
            "Smoothies"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1303,
          "name": "Snacks & Sweets",
          "details": [
            {
              "Product Name": "Crunchy Sea Salt Potato Chips",
              "Brand": "SnackMaster",
              "Category": "Snacks",
              "Flavor": "Sea Salt",
              "Net Weight": "8 oz",
              "Ingredients": ["Potatoes", "Vegetable Oil", "Sea Salt"],
              "Nutritional Information": {
                "Serving Size": "1 oz",
                "Calories": 150,
                "Total Fat": 10,
                "Sodium": 180,
                "Total Carbohydrates": 15,
                "Protein": 2
              },
              "Price": "$2.49",
              "Customer Ratings": 4.7,
              "Number of Reviews": 25,
              "Seller Contact": "snacks@example.com",
              "Additional Notes": "SnackMaster Crunchy Sea Salt Potato Chips are made from the finest potatoes and seasoned with just the right amount of sea salt. Enjoy the perfect crunch with every bite."
            },
            // Add 24 more snack and sweet entries with similar details
          ],
          "subcategories": [
            "Chips",
            "Candies",
            "Chocolate",
            "Cookies",
            "Popcorn",
            "Nuts",
            "Trail Mix",
            "Gummies",
            "Gourmet Snacks",
            "Healthy Snacks"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1304,
          "name": "Gourmet Foods",
          "details": [
            {
              "Product Name": "Truffle Infused Olive Oil",
              "Brand": "Gourmet Delights",
              "Category": "Gourmet Foods",
              "Volume": "250ml",
              "Ingredients": ["Extra Virgin Olive Oil", "Black Truffle Extract"],
              "Certification": "PDO Certified",
              "Origin": "Italy",
              "Taste Profile": "Rich, Earthy, and Nutty",
              "Packaging": "Dark Glass Bottle",
              "Price": "$24.99",
              "Customer Ratings": 4.9,
              "Number of Reviews": 50,
              "Seller Contact": "gourmet@example.com",
              "Additional Notes": "Experience the luxurious taste of our Truffle Infused Olive Oil, crafted with the finest extra virgin olive oil and black truffle extract. Elevate your culinary creations with this gourmet delight."
            },
            // Add 24 more gourmet food entries with similar details
          ],
          "subcategories": [
            "Fine Cheese",
            "Caviar",
            "Truffles",
            "Foie Gras",
            "Specialty Oils & Vinegars",
            "Gourmet Sauces",
            "Artisanal Chocolates",
            "Luxury Food Gifts",
            "Exotic Spices",
            "Premium Coffee"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1305,
          "name": "Cooking Ingredients",
          "details": [
            {
              "Product Name": "Organic Quinoa",
              "Brand": "Nature's Best",
              "Category": "Cooking Ingredients",
              "Weight": "1 lb",
              "Type": "Whole Grain",
              "Certification": "USDA Organic",
              "Origin": "Peru",
              "Nutritional Information": {
                "Calories": 120,
                "Protein": "8g",
                "Fat": "2g",
                "Carbohydrates": "21g",
                "Fiber": "3g",
              },
              "Packaging": "Resealable Bag",
              "Price": "$7.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 30,
              "Seller Contact": "ingredients@example.com",
              "Additional Notes": "Add a nutritious and versatile touch to your meals with our organic quinoa. Packed with protein and essential nutrients, it's a perfect addition to your pantry."
            },
            // Add 24 more cooking ingredient entries with similar details
          ],
          "subcategories": [
            "Herbs & Spices",
            "Flour & Baking Mixes",
            "Sauces & Marinades",
            "Oils & Vinegars",
            "Canned Vegetables",
            "Dried Fruits",
            "Condiments",
            "Baking Essentials",
            "Grains & Legumes",
            "Seasonings"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1306,
          "name": "Recipes & Cookbooks",
          "details": [
            {
              "Title": "The Art of Italian Cooking",
              "Author": "Maria Rossi",
              "Category": "Recipes & Cookbooks",
              "Language": "English",
              "Format": "Hardcover",
              "Pages": 250,
              "Publication Date": "2022-05-15",
              "Publisher": "Culinary Press",
              "ISBN": "978-1-234567-89-0",
              "Price": "$24.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 50,
              "Seller Contact": "books@example.com",
              "Additional Notes": "Explore the rich flavors of Italian cuisine with this comprehensive cookbook by renowned chef Maria Rossi. From classic pasta dishes to authentic desserts, discover the secrets of Italian cooking."
            },
            // Add 24 more recipes and cookbooks entries with similar details
          ],
          "subcategories": [
            "Cookbook Collections",
            "Healthy Recipes",
            "International Cuisine",
            "Dessert Recipes",
            "Vegetarian & Vegan Recipes",
            "Quick & Easy Recipes",
            "Family Favorites",
            "Baking Recipes",
            "Celebrity Chef Cookbooks",
            "Cooking Magazines"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1307,
          "name": "Ready-to-Eat Meals",
          "details": [
            {
              "Product Name": "Gourmet Chicken Alfredo",
              "Brand": "Chef's Choice",
              "Category": "Ready-to-Eat Meals",
              "Cuisine": "Italian",
              "Weight": "350g",
              "Ingredients": ["Grilled Chicken", "Alfredo Sauce", "Fettuccine Pasta", "Parmesan Cheese"],
              "Allergens": ["Milk", "Wheat"],
              "Storage Instructions": "Keep frozen until ready to heat",
              "Heating Instructions": "Microwave on high for 4 minutes or until hot",
              "Expiration Date": "2023-12-15",
              "Price": "$8.99",
              "Customer Ratings": 4.5,
              "Number of Reviews": 30,
              "Seller Contact": "meals@example.com",
              "Additional Notes": "Indulge in the exquisite taste of our gourmet chicken alfredo, made with premium ingredients for a restaurant-quality dining experience at home."
            },
            // Add 24 more ready-to-eat meals entries with similar details
          ],
          "subcategories": [
            "Pre-Packaged Meals",
            "Frozen Dinners",
            "Meal Kits",
            "Canned Soups",
            "Microwaveable Meals",
            "Salad Kits",
            "Gourmet Frozen Entrees",
            "Breakfast Bowls",
            "Healthy Lunch Options",
            "Deli Sandwiches"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1308,
          "name": "Dietary & Specialty Foods",
          "details": [
            {
              "Product Name": "Organic Quinoa Crunch",
              "Brand": "Nature's Harvest",
              "Category": "Dietary & Specialty Foods",
              "Type": "Grains & Seeds",
              "Weight": "500g",
              "Ingredients": ["Organic Quinoa", "Chia Seeds", "Almonds", "Honey"],
              "Allergens": ["Tree Nuts"],
              "Certifications": ["Organic", "Gluten-Free"],
              "Storage Instructions": "Store in a cool, dry place",
              "Best Before Date": "2023-11-30",
              "Price": "$12.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 50,
              "Seller Contact": "foods@example.com",
              "Additional Notes": "Experience the wholesome goodness of our organic quinoa crunch, a perfect blend of quinoa, chia seeds, and almonds for a nutritious snack."
            },
            // Add 24 more dietary and specialty foods entries with similar details
          ],
          "subcategories": [
            "Gluten-Free Products",
            "Organic Foods",
            "Keto-Friendly Foods",
            "Paleo Diet Foods",
            "Vegan & Plant-Based",
            "Low-Carb Options",
            "Sugar-Free Products",
            "Non-GMO Foods",
            "Allergen-Free Foods",
            "Dairy-Free Alternatives"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1309,
          "name": "Desserts & Bakery Items",
          "details": [
            {
              "Product Name": "Chocolate Fudge Cake",
              "Brand": "Sweet Delights",
              "Category": "Desserts & Bakery Items",
              "Type": "Cake",
              "Flavor": "Chocolate",
              "Weight": "1.5 lbs",
              "Ingredients": ["Cocoa Powder", "Sugar", "Flour", "Eggs", "Butter"],
              "Allergens": ["Gluten", "Dairy", "Eggs"],
              "Certifications": ["Halal"],
              "Storage Instructions": "Refrigerate for freshness",
              "Best Before Date": "2023-12-15",
              "Price": "$19.99",
              "Customer Ratings": 4.9,
              "Number of Reviews": 100,
              "Seller Contact": "bakery@example.com",
              "Additional Notes": "Indulge in the rich and moist goodness of our chocolate fudge cake, perfect for any celebration or sweet craving."
            },
            // Add 24 more desserts and bakery items entries with similar details
          ],
          "subcategories": [
            "Cakes & Pastries",
            "Pies & Tarts",
            "Cookies & Brownies",
            "Doughnuts & Muffins",
            "Gelato & Sorbet",
            "Chocolate Truffles",
            "Cheesecakes",
            "Cupcakes & Cakes in a Jar",
            "Artisanal Breads",
            "Custom Cakes"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1310,
          "name": "Health & Organic Foods",
          "details": [
            {
              "Product Name": "Organic Quinoa",
              "Brand": "Nature's Harvest",
              "Category": "Health & Organic Foods",
              "Type": "Whole Grain",
              "Packaging Size": "2 lbs",
              "Organic Certification": true,
              "Gluten-Free": true,
              "Non-GMO": true,
              "Vegan": true,
              "Nutritional Information": {
                "Calories": 180,
                "Protein": "8g",
                "Fat": "3g",
                "Carbohydrates": "32g",
                "Fiber": "5g",
              },
              "Ingredients": ["Organic Quinoa"],
              "Price": "$12.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 80,
              "Seller Contact": "healthfood@example.com",
              "Additional Notes": "Nature's Harvest organic quinoa is a versatile and nutritious whole grain that can be used in various dishes for a healthy and balanced diet."
            },
            // Add 24 more health and organic foods entries with similar details
          ],        
          "subcategories": [
            "Organic Produce",
            "Natural Snacks",
            "Superfoods",
            "Whole Grains",
            "Protein Supplements",
            "Plant-Based Proteins",
            "Healthy Smoothie Mixes",
            "Vitamins & Supplements",
            "Organic Baby Food",
            "Gluten-Free Alternatives"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 14,
      "name": "Travel & Vacation",
      "subcategories": [
        {
          "id": 1401,
          "name": "Hotel Bookings",
          "details": [
            {
              "Hotel Name": "Sunset Paradise Resort",
              "Location": "Maui, Hawaii",
              "Star Rating": 5,
              "Room Types": ["Deluxe Suite", "Ocean View Room", "Family Villa"],
              "Amenities": ["Swimming Pool", "Spa", "Fitness Center", "Beach Access"],
              "Check-in Time": "3:00 PM",
              "Check-out Time": "11:00 AM",
              "Free Cancellation": true,
              "Wi-Fi": true,
              "Breakfast Included": false,
              "Pet-Friendly": false,
              "Room Prices": {
                "Deluxe Suite": "$300 per night",
                "Ocean View Room": "$200 per night",
                "Family Villa": "$500 per night",
              },
              "Customer Ratings": 4.9,
              "Number of Reviews": 120,
              "Booking Website": "sunsetparadise.com",
              "Additional Notes": "Experience luxury and relaxation at Sunset Paradise Resort. Enjoy breathtaking views, top-notch amenities, and personalized service during your stay."
            },
            // Add 24 more hotel entries with similar details
          ],
          "subcategories": [
            "Luxury Hotels",
            "Boutique Hotels",
            "Budget Accommodations",
            "Resorts & Spas",
            "Beachfront Hotels",
            "City Center Hotels",
            "Pet-Friendly Hotels",
            "All-Inclusive Resorts",
            "Bed & Breakfasts",
            "Hostels"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1402,
          "name": "Vacation Packages",
          "details": [
            {
              "Package Name": "Tropical Paradise Getaway",
              "Destination": "Bora Bora, French Polynesia",
              "Duration": "7 days, 6 nights",
              "Accommodation": "Overwater Bungalow",
              "Activities": ["Snorkeling", "Island Excursions", "Sunset Cruise"],
              "Meals Included": ["Breakfast", "Lunch"],
              "Transportation": "Round-trip Flights",
              "Guided Tours": true,
              "Language Guides": ["English", "French"],
              "Travel Insurance": true,
              "Price": "$4,999 per person",
              "Customer Ratings": 4.7,
              "Number of Reviews": 90,
              "Booking Website": "tropicalgetaways.com",
              "Additional Notes": "Escape to the tropical paradise of Bora Bora with our all-inclusive getaway package. Immerse yourself in luxury, adventure, and natural beauty."
            },
            // Add 24 more vacation package entries with similar details
          ],  
          "subcategories": [
            "Beach Getaways",
            "Adventure Trips",
            "Cultural Tours",
            "Honeymoon Packages",
            "Family Vacations",
            "Ski & Snowboard Deals",
            "Cruise Vacations",
            "Luxury Escapes",
            "Group Travel",
            "Last-Minute Deals"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1403,
          "name": "Travel Accessories",
          "details": [
            {
              "Product Name": "TravelPro Voyager Expandable Luggage",
              "Brand": "TravelPro",
              "Product Type": "Luggage",
              "Color Options": ["Black", "Navy Blue", "Silver"],
              "Size Options": ["Carry-On", "Medium", "Large"],
              "Material": "Durable Polyester",
              "Wheels": "Spinner Wheels",
              "Telescoping Handle": true,
              "Expandable": true,
              "TSA Lock": true,
              "Compartments": ["Main Compartment", "Zippered Pockets"],
              "Price": "$129.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 120,
              "Purchase Platform": "amazon.com",
              "Additional Notes": "Upgrade your travel experience with the TravelPro Voyager Expandable Luggage. Stay organized and travel in style."
            },
            // Add 24 more travel accessory entries with similar details
          ],
          "subcategories": [
            "Luggage Sets",
            "Travel Adapters",
            "Packing Cubes",
            "Travel Pillows",
            "Travel Backpacks",
            "Passport Holders",
            "Travel Locks",
            "Neck Wallets",
            "Travel Toiletry Kits",
            "Travel Organizers"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1404,
          "name": "Car Rentals",
          "details": [
            {
              "Car Model": "Toyota Camry",
              "Car Type": "Sedan",
              "Color Options": ["Silver", "Black", "White"],
              "Rental Duration Options": ["Daily", "Weekly", "Monthly"],
              "Fuel Type": "Petrol",
              "Transmission": "Automatic",
              "Seating Capacity": 5,
              "Mileage": "30 mpg",
              "GPS Navigation": true,
              "Bluetooth Connectivity": true,
              "Price Per Day": "$39.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 85,
              "Rental Agency": "DriveSmart Rentals",
              "Pickup/Drop-off Locations": ["Airport", "City Center", "Hotel"],
              "Additional Notes": "Explore the city with comfort and style in our reliable Toyota Camry. Affordable rates and flexible rental durations."
            },
            // Add 24 more car rental entries with similar details
          ],
          "subcategories": [
            "Economy Cars",
            "SUV Rentals",
            "Luxury Car Rentals",
            "Convertible Rentals",
            "Van Rentals",
            "Truck Rentals",
            "One-Way Rentals",
            "Airport Car Rentals",
            "Long-Term Rentals",
            "Electric Car Rentals"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1405,
          "name": "Tourist Attractions",
          "details": [
            {
              "Attraction Name": "Golden Gate Bridge",
              "Location": "San Francisco, California",
              "Type": "Landmark",
              "Admission Fee": "$10.00",
              "Operating Hours": "9:00 AM - 6:00 PM",
              "Featured Activities": ["Scenic Views", "Bridge Walks", "Photography"],
              "Accessibility": true,
              "Rating": 4.8,
              "Number of Reviews": 1200,
              "Nearby Dining Options": ["Café Vista", "Golden Gate Grill"],
              "Additional Information": "Experience the iconic Golden Gate Bridge with breathtaking views of the San Francisco skyline. Perfect for photography enthusiasts and nature lovers."
            },
            // Add 24 more tourist attraction entries with similar details
          ],
          "subcategories": [
            "Museums & Galleries",
            "Historical Sites",
            "Amusement Parks",
            "Zoos & Aquariums",
            "Botanical Gardens",
            "Landmarks & Monuments",
            "Theme Parks",
            "Cultural Experiences",
            "Natural Wonders",
            "Wine Tasting Tours"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1406,
          "name": "Travel Guides",
          "details": [
            {
              "Guide Title": "Explore Paris Like a Local",
              "Author": "Emma Johnson",
              "Destination": "Paris, France",
              "Publication Date": "2023-05-15",
              "Pages": 200,
              "Language": "English",
              "Price": "$19.99",
              "Format": ["Paperback", "E-book"],
              "ISBN": "978-1-234567-89-0",
              "Rating": 4.7,
              "Number of Reviews": 150,
              "Included Features": ["Hidden Gems", "Cultural Insights", "Local Cuisine Tips"],
              "Sample Chapter Available": true,
              "Additional Notes": "Embark on a journey through the streets of Paris with insider tips and recommendations. Discover hidden gems and experience the city like a true local."
            },
            // Add 24 more travel guide entries with similar details
          ],
          "subcategories": [
            "Destination Guides",
            "Travel Blogs",
            "Travel Magazines",
            "Travel Apps",
            "Local Tips",
            "Adventure Guides",
            "Foodie Guides",
            "Budget Travel Tips",
            "Solo Travel Guides",
            "Luxury Travel Guides"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1407,
          "name": "Luggage & Suitcases",
          "details": [
            {
              "Brand": "Traveler's Choice",
              "Product Name": "Voyager Hardside Spinner Luggage",
              "Material": "Polycarbonate",
              "Color Options": ["Black", "Silver", "Navy Blue"],
              "Size": "Medium",
              "Dimensions": "24'' x 16'' x 10''",
              "Weight": "8.5 lbs",
              "Wheels": "360-Degree Spinner Wheels",
              "Handle": "Telescopic Handle",
              "Locking System": "TSA-Approved Combination Lock",
              "Interior Features": ["Spacious Compartment", "Zippered Pockets", "Compression Straps"],
              "Price": "$89.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 200,
              "Manufacturer": "Traveler's Choice",
              "Additional Notes": "Travel with confidence using the Voyager Hardside Spinner Luggage. Durable, stylish, and packed with convenient features for your journey."
            },
            // Add 24 more luggage entries with similar details
          ],
          "subcategories": [
            "Carry-On Luggage",
            "Checked Luggage",
            "Spinner Luggage",
            "Hardside Luggage",
            "Softside Luggage",
            "Kids' Luggage",
            "Luggage Sets",
            "Duffel Bags",
            "Garment Bags",
            "Travel Totes"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1408,
          "name": "Cruise Packages",
          "details": [
            {
              "Cruise Line": "Royal Caribbean International",
              "Package Name": "Caribbean Paradise Cruise",
              "Destination": "Eastern Caribbean",
              "Duration": "7 nights",
              "Departure Port": "Miami, FL",
              "Ports of Call": ["St. Maarten", "St. Thomas", "Nassau"],
              "Cabin Options": ["Interior", "Ocean View", "Balcony", "Suite"],
              "Inclusions": ["All Meals", "Onboard Entertainment", "Excursions at Ports", "Access to Amenities"],
              "Price Range": "$1,200 - $3,500",
              "Customer Ratings": 4.9,
              "Number of Reviews": 300,
              "Travel Agency": "Ocean Explorer Cruises",
              "Additional Notes": "Embark on a journey to the Caribbean paradise with Royal Caribbean. Experience luxury, relaxation, and unforgettable moments at sea."
            },
            // Add 24 more cruise package entries with similar details
          ],
          "subcategories": [
            "Caribbean Cruises",
            "Mediterranean Cruises",
            "Alaska Cruises",
            "River Cruises",
            "Expedition Cruises",
            "Family Cruises",
            "Luxury Cruises",
            "Theme Cruises",
            "Cruise & Stay Packages",
            "Cruise Deals"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1409,
          "name": "Adventure Travel",
          "details": [
            {
              "Adventure Company": "Extreme Expeditions",
              "Package Name": "Amazon Rainforest Exploration",
              "Destination": "Amazon Rainforest, Brazil",
              "Duration": "10 days",
              "Activities": ["Jungle Trekking", "Wildlife Safari", "Canopy Zip-lining", "River Rafting"],
              "Accommodation": "Eco-friendly Jungle Lodges",
              "Meals": ["Local Cuisine", "Campfire Dinners"],
              "Equipment Provided": ["Trekking Gear", "Binoculars", "Rafting Equipment"],
              "Guide": "Experienced Naturalist Guide",
              "Price Range": "$2,500 - $5,000",
              "Customer Ratings": 4.8,
              "Number of Reviews": 200,
              "Booking Agency": "Adventure Seeker Tours",
              "Additional Notes": "Embark on an unforgettable adventure in the heart of the Amazon Rainforest. Immerse yourself in nature, witness diverse wildlife, and experience the thrill of outdoor activities."
            },
            // Add 24 more adventure travel package entries with similar details
          ],
          "subcategories": [
            "Hiking & Trekking",
            "Wildlife Safaris",
            "Rafting & Kayaking",
            "Cycling Tours",
            "Ski & Snowboard Adventures",
            "Diving & Snorkeling",
            "Camping Expeditions",
            "Exotic Adventures",
            "Off-Road Tours",
            "Volunteer Travel"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1410,
          "name": "Camping & Outdoor Trips",
          "details": [
            {
              "Product Name": "Explorer Backpack",
              "Brand": "Adventure Gear",
              "Product Type": "Hiking Backpack",
              "Color Options": ["Green", "Blue", "Black"],
              "Capacity": "40L",
              "Material": "Water-Resistant Nylon",
              "Adjustable Straps": true,
              "Multiple Compartments": true,
              "Hydration System Compatible": true,
              "Price": "$79.99",
              "Customer Ratings": 4.5,
              "Number of Reviews": 120,
              "Manufacturer": "Outdoor Essentials Co.",
              "Additional Notes": "Carry all your essentials comfortably during hikes with the Explorer Backpack. Durable, spacious, and designed for outdoor adventures."
            },
            // Add 24 more camping and outdoor trip item entries with similar details
          ],
          "subcategories": [
            "Tent Camping",
            "RV Camping",
            "Glamping",
            "Backpacking Trips",
            "National Park Adventures",
            "Beach Camping",
            "Mountain Escapes",
            "Family Camping",
            "Fishing Trips",
            "Campfire Cooking"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 15,
      "name": "Business & Services",
      "subcategories": [
        {
          "id": 1501,
          "name": "Office Supplies",
          "details": [
            {
              "Product Name": "Executive Office Chair",
              "Brand": "WorkWell",
              "Product Type": "Desk Chair",
              "Color Options": ["Black", "Brown", "Gray"],
              "Material": "Leather",
              "Adjustable Height": true,
              "Ergonomic Design": true,
              "Swivel Function": true,
              "Weight Capacity": "Up to 250 lbs",
              "Price": "$199.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 150,
              "Manufacturer": "Office Comfort Solutions",
              "Additional Notes": "Upgrade your office with the Executive Office Chair. Designed for comfort and productivity, it's perfect for long hours at the desk."
            },
            // Add 24 more office supplies item entries with similar details
          ],
          "subcategories": [
            "Stationery",
            "Paper Products",
            "Writing Instruments",
            "Desk Accessories",
            "Office Furniture",
            "Office Organization",
            "Ink & Toner",
            "Printers",
            "Office Technology",
            "Breakroom Supplies"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1502,
          "name": "Professional Services",
          "details": [
            {
              "Service Name": "Business Consulting",
              "Service Type": "Professional Consulting",
              "Description": "Expert advice for business strategy and growth.",
              "Duration": "Flexible",
              "Service Providers": ["Certified Business Consultants"],
              "Price Range": "$500 - $5,000",
              "Customer Ratings": 4.9,
              "Number of Reviews": 100,
              "Service Provider": "Strategic Solutions Inc.",
              "Additional Notes": "Boost your business with our professional consulting services. Tailored solutions for every industry."
            },
            // Add 24 more professional services entries with similar details
          ],
          "subcategories": [
            "Legal Services",
            "Accounting & Tax",
            "Consulting Services",
            "HR & Payroll",
            "Marketing & Advertising",
            "IT Services",
            "Translation Services",
            "Real Estate Services",
            "Event Planning",
            "Business Coaching"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1503,
          "name": "Business Equipment",
          "details": [
            {
              "Product Name": "High-Speed Laser Printer",
              "Brand": "TechPrint",
              "Product Type": "Laser Printer",
              "Color Options": ["Black", "White", "Gray"],
              "Duplex Printing": true,
              "Wireless Connectivity": true,
              "Paper Capacity": "500 sheets",
              "Dimensions": "15'' x 18'' x 10''",
              "Weight": "20 lbs",
              "Price": "$499.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 50,
              "Manufacturer": "TechPrint Solutions",
              "Additional Notes": "Efficient and reliable, the TechPrint Laser Printer is perfect for busy office environments."
            },
            // Add 24 more business equipment entries with similar details
          ],
          "subcategories": [
            "Computers & Laptops",
            "Printers & Scanners",
            "Office Phones",
            "Projectors",
            "Point of Sale (POS) Systems",
            "Security Systems",
            "Networking Equipment",
            "Cash Registers",
            "Audio-Visual Equipment",
            "Office Machines"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1504,
          "name": "Marketing & Advertising",
          "details": [
            {
              "Service Name": "Social Media Marketing Package",
              "Service Type": "Marketing",
              "Description": "Boost your online presence with a comprehensive social media marketing package.",
              "Duration": "1 month",
              "Service Providers": ["Digital Marketing Experts", "Social Media Managers"],
              "Target Platforms": ["Facebook", "Instagram", "Twitter"],
              "Ad Campaigns": true,
              "Analytics and Reporting": true,
              "Price Range": "$1,500 - $5,000",
              "Customer Ratings": 4.9,
              "Number of Reviews": 100,
              "Service Provider": "DigitalBoost Marketing",
              "Additional Notes": "Maximize your brand's visibility and engagement across major social media platforms."
            },
            // Add 24 more marketing and advertising entries with similar details
          ],
          "subcategories": [
            "Digital Marketing",
            "Social Media Marketing",
            "Content Marketing",
            "Search Engine Optimization (SEO)",
            "Pay-Per-Click Advertising (PPC)",
            "Email Marketing",
            "Print Advertising",
            "Outdoor Advertising",
            "Video Marketing",
            "Influencer Marketing"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1505,
          "name": "Financial Services",
          "details": [
            {
              "Service Name": "Personal Financial Planning",
              "Service Type": "Financial Services",
              "Description": "Get personalized financial planning to achieve your financial goals and secure your future.",
              "Duration": "1 year",
              "Service Providers": ["Certified Financial Planners", "Investment Advisors"],
              "Budgeting": true,
              "Investment Management": true,
              "Retirement Planning": true,
              "Risk Analysis": true,
              "Price Range": "$500 - $2,500",
              "Customer Ratings": 4.7,
              "Number of Reviews": 50,
              "Service Provider": "WealthGuard Advisors",
              "Additional Notes": "Empower your financial journey with expert guidance and comprehensive planning."
            },
            // Add 24 more financial services entries with similar details
          ],
          "subcategories": [
            "Accounting Services",
            "Financial Planning",
            "Tax Services",
            "Investment Services",
            "Loan & Credit Services",
            "Insurance Services",
            "Retirement Planning",
            "Wealth Management",
            "Estate Planning",
            "Financial Consulting"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1506,
          "name": "Business Opportunities",
          "details": [
            {
              "Opportunity Title": "Franchise Ownership",
              "Business Type": "Business Opportunities",
              "Description": "Own a franchise and be part of a successful business model with proven profitability.",
              "Investment Range": "$50,000 - $500,000",
              "Industry": "Various (Specify)",
              "Training Provided": true,
              "Ongoing Support": true,
              "Marketing Assistance": true,
              "Exclusive Territory": true,
              "Customer Ratings": 4.8,
              "Number of Reviews": 100,
              "Opportunity Provider": "Global Franchise Group",
              "Additional Notes": "Explore the exciting world of entrepreneurship by owning a franchise in a growing industry."
            },
            // Add 24 more business opportunities entries with similar details
          ],
          "subcategories": [
            "Franchise Opportunities",
            "Startup Incubators",
            "Business for Sale",
            "Investment Opportunities",
            "Entrepreneurial Programs",
            "Business Networking",
            "Import & Export Opportunities",
            "Online Business Opportunities",
            "Home-Based Business",
            "Partnership Opportunities"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1507,
          "name": "Business Consulting",
          "details": [
            {
              "Service Name": "Strategic Business Consultation",
              "Service Type": "Business Consulting",
              "Description": "Gain insights and develop a strategic roadmap for your business success with our expert consulting services.",
              "Duration": "Customized",
              "Consultants": ["Experienced Business Analysts", "Industry Specialists"],
              "Analysis and Planning": true,
              "Implementation Assistance": true,
              "Performance Evaluation": true,
              "Customized Solutions": true,
              "Customer Ratings": 4.9,
              "Number of Reviews": 150,
              "Service Provider": "ProBiz Consultants",
              "Additional Notes": "Transform your business with our comprehensive consulting services tailored to your unique needs."
            },
            // Add 24 more business consulting service entries with similar details
          ],
          "subcategories": [
            "Management Consulting",
            "Strategy Consulting",
            "IT Consulting",
            "Financial Consulting",
            "Marketing Consulting",
            "HR Consulting",
            "Change Management",
            "Operations Consulting",
            "Startup Consulting",
            "Legal Consulting"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1508,
          "name": "Legal Services",
          "details": [
            {
              "Service Name": "Business Legal Consultation",
              "Service Type": "Legal Services",
              "Description": "Get expert legal advice to navigate complex business laws and regulations.",
              "Legal Areas": ["Contracts", "Intellectual Property", "Employment Law", "Business Litigation"],
              "Legal Consultation": true,
              "Document Drafting and Review": true,
              "Legal Representation": true,
              "Compliance Assistance": true,
              "Customer Ratings": 4.8,
              "Number of Reviews": 120,
              "Law Firm": "LegalPros Law Associates",
              "Additional Notes": "Protect your business with our comprehensive legal services tailored to your specific needs."
            },
            // Add 24 more legal service entries with similar details
          ],
          "subcategories": [
            "Lawyers & Attorneys",
            "Legal Advice",
            "Legal Representation",
            "Criminal Defense",
            "Family Law",
            "Real Estate Law",
            "Business Law",
            "Estate Planning",
            "Immigration Services",
            "Intellectual Property Law"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1509,
          "name": "IT & Web Services",
          "details": [
            {
              "Service Name": "Custom Web Development",
              "Service Type": "IT & Web Services",
              "Description": "Build a unique and responsive website tailored to your business needs.",
              "Technologies": ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js"],
              "Mobile Responsiveness": true,
              "E-commerce Integration": true,
              "Content Management System": "WordPress",
              "SEO Optimization": true,
              "Customer Ratings": 4.9,
              "Number of Reviews": 150,
              "IT Company": "TechSolutions Inc.",
              "Additional Notes": "Enhance your online presence with our expert web development services."
            },
            // Add 24 more IT & Web service entries with similar details
          ],
          "subcategories": [
            "Website Development",
            "Software Development",
            "IT Support",
            "Cloud Computing",
            "Cybersecurity Services",
            "Data Analytics",
            "Mobile App Development",
            "E-commerce Solutions",
            "Web Hosting",
            "Digital Transformation"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1510,
          "name": "Printing & Copying Services",
          "details": [
            {
              "Service Name": "Digital Printing",
              "Service Type": "Printing & Copying Services",
              "Description": "High-quality digital printing services for various materials and formats.",
              "Printing Options": ["Brochures", "Flyers", "Business Cards", "Posters"],
              "Color Options": ["CMYK", "Pantone Matching System"],
              "Paper Types": ["Glossy", "Matte", "Recycled"],
              "Custom Design Services": true,
              "Bulk Printing Discounts": true,
              "Delivery Options": ["Local Pickup", "Courier Service"],
              "Customer Ratings": 4.8,
              "Number of Reviews": 120,
              "Printing Company": "PrintHub Solutions",
              "Additional Notes": "Bring your ideas to life with our professional digital printing services."
            },
            // Add 24 more Printing & Copying service entries with similar details
          ],
          "subcategories": [
            "Digital Printing",
            "Offset Printing",
            "Large Format Printing",
            "Document Scanning",
            "Binding & Finishing",
            "Graphic Design Services",
            "Business Cards Printing",
            "Flyer Printing",
            "Brochure Printing",
            "Custom Printing"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 16,
      "name": "Real Estate",
      "subcategories": [
        {
          "id": 1601,
          "name": "Rent",
          "details": [
            {
              "Property Type": "Apartment",
              "Location": "Downtown City",
              "Number of Bedrooms": 2,
              "Number of Bathrooms": 1,
              "Square Footage": "1,000 sqft",
              "Furnished": true,
              "Utilities Included": ["Water", "Trash"],
              "Pet-Friendly": false,
              "Parking Spaces": 1,
              "Lease Duration": "1 year",
              "Rent per Month": "$1,500",
              "Security Deposit": "$1,000",
              "Amenities": ["In-Unit Laundry", "Balcony", "Fitness Center"],
              "Property Manager": "CityView Rentals",
              "Customer Ratings": 4.7,
              "Number of Reviews": 50,
              "Additional Notes": "Modern and spacious apartment in the heart of the city with convenient amenities."
            },
            // Add 24 more rental property entries with similar details
          ],
          "subcategories": [
            "Apartment Rentals",
            "House Rentals",
            "Commercial Space for Rent",
            "Vacation Rentals",
            "Short-Term Rentals",
            "Room Rentals",
            "Storage Rentals",
            "Event Space Rentals",
            "Office Space for Lease",
            "Retail Space for Rent"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1602,
          "name": "Sell",
          "details": [
            {
              "Property Type": "Single Family Home",
              "Location": "Suburban Neighborhood",
              "Number of Bedrooms": 3,
              "Number of Bathrooms": 2.5,
              "Square Footage": "2,000 sqft",
              "Lot Size": "0.25 acres",
              "Year Built": 2020,
              "Garage": true,
              "Swimming Pool": false,
              "Fireplace": true,
              "Renovations": ["Kitchen Remodel", "Master Bathroom Upgrade"],
              "Amenities": ["Spacious Yard", "Patio", "Walk-in Closet"],
              "List Price": "$450,000",
              "Property Taxes": "$5,000 per year",
              "Open House Dates": ["Saturday, 10 AM - 2 PM", "Sunday, 1 PM - 4 PM"],
              "Real Estate Agent": "YourName Real Estate",
              "Customer Ratings": 4.9,
              "Number of Reviews": 30,
              "Additional Notes": "Beautiful single-family home with modern amenities and recent renovations."
            },
            // Add 24 more real estate property entries with similar details
          ],
          "subcategories": [
            "Homes for Sale",
            "Apartments for Sale",
            "Commercial Properties for Sale",
            "Land for Sale",
            "New Construction Homes",
            "Foreclosed Properties",
            "Luxury Homes",
            "Investment Properties",
            "Real Estate Auctions",
            "Fixer-Upper Properties"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1603,
          "name": "Commercial Rent",
          "details": [
            {
              "Property Type": "Office Space",
              "Location": "Downtown Business District",
              "Floor Area": "5,000 sqft",
              "Number of Floors": 3,
              "Conference Rooms": 2,
              "Private Offices": 15,
              "Open Workspace": true,
              "Kitchenette": true,
              "Restrooms": 3,
              "Parking Spaces": 10,
              "Elevator": true,
              "Security System": true,
              "Utilities Included": ["Electricity", "Water", "Internet"],
              "Lease Terms": "3-year minimum",
              "Monthly Rent": "$8,000",
              "Common Area Maintenance (CAM) Fee": "$1,000",
              "Property Taxes": "$10,000 per year",
              "Available From": "Immediate",
              "Real Estate Agent": "YourName Real Estate",
              "Customer Ratings": 4.7,
              "Number of Reviews": 20,
              "Additional Notes": "Prime office space in the heart of the business district, suitable for corporate offices or startups."
            },
            // Add 24 more commercial rental property entries with similar details
          ],
          "subcategories": [
            "Office Space for Rent",
            "Retail Space for Lease",
            "Industrial Space for Rent",
            "Restaurant Space for Rent",
            "Warehouse Space for Lease",
            "Medical Office Space for Rent",
            "Coworking Space",
            "Shared Office Space",
            "Virtual Office Space",
            "Pop-Up Retail Space"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1604,
          "name": "Residential Land",
          "details": [
            {
              "Property Type": "Residential Land",
              "Location": "Suburban Area",
              "Land Area": "10,000 sqft",
              "Zoning": "Residential",
              "Utilities": ["Electricity", "Water", "Sewer", "Gas"],
              "Nearby Amenities": ["Schools", "Parks", "Shopping Centers"],
              "Road Access": "Paved",
              "Orientation": "North-South Facing",
              "Elevation": "Flat",
              "Soil Type": "Loam",
              "Price per Sqft": "$10",
              "Legal Restrictions": "None",
              "Owner Financing": true,
              "Down Payment": "$5,000",
              "Monthly Installment": "$500",
              "Available From": "Immediate",
              "Real Estate Agent": "YourName Real Estate",
              "Customer Ratings": 4.5,
              "Number of Reviews": 15,
              "Additional Notes": "Spacious residential land ideal for building your dream home in a family-friendly suburban neighborhood."
            },
            // Add 24 more residential land entries with similar details
          ],  
          "subcategories": [
            "Residential Lots",
            "Plot of Land for a Home",
            "Land for Development",
            "Acreage for Sale",
            "Subdivision Land",
            "Lakefront Land",
            "Mountain View Land",
            "Rural Land",
            "Urban Land",
            "Land with Utilities"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1605,
          "name": "Commercial Land",
          "details": [
            {
              "Property Type": "Commercial Land",
              "Location": "Downtown Business District",
              "Land Area": "20,000 sqft",
              "Zoning": "Commercial",
              "Utilities": ["Electricity", "Water", "Sewer", "Gas"],
              "Nearby Amenities": ["Public Transportation", "Restaurants", "Hotels"],
              "Road Frontage": "Main Road",
              "Topography": "Level",
              "Soil Type": "Sandy Loam",
              "Price per Sqft": "$30",
              "Legal Restrictions": "City Zoning Regulations",
              "Owner Financing": false,
              "Lease Options": true,
              "Lease Terms": "Negotiable",
              "Available From": "Immediate",
              "Real Estate Agent": "YourName Commercial Realty",
              "Customer Ratings": 4.7,
              "Number of Reviews": 20,
              "Additional Notes": "Prime commercial land in the heart of the business district, suitable for retail, office, or mixed-use development."
            },
            // Add 24 more commercial land entries with similar details
          ],
          "subcategories": [
            "Commercial Development Land",
            "Industrial Land",
            "Retail Land",
            "Office Park Land",
            "Vacant Lots for Businesses",
            "Mixed-Use Land",
            "Zoned Land for Sale",
            "Land for Investment",
            "Land for Lease",
            "Waterfront Commercial Land"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1606,
          "name": "Apartments",
          "details": [
            {
              "Property Type": "Apartment",
              "Location": "City Center",
              "Number of Bedrooms": 2,
              "Number of Bathrooms": 2,
              "Floor Area": "1,200 sqft",
              "Floor Level": 10,
              "Building Type": "High-rise",
              "Amenities": ["Swimming Pool", "Gym", "Security", "Parking"],
              "Furnished": true,
              "Balcony/Patio": true,
              "View": "City Skyline",
              "Price": "$300,000",
              "Maintenance Fee": "$200/month",
              "Legal Restrictions": "None",
              "Owner Financing": false,
              "Lease Options": false,
              "Available From": "Immediate",
              "Real Estate Agent": "YourName Realty",
              "Customer Ratings": 4.9,
              "Number of Reviews": 30,
              "Additional Notes": "Modern 2-bedroom apartment with stunning city views, fully furnished, and equipped with top-notch amenities."
            },
            // Add 24 more apartment entries with similar details
          ],        
          "subcategories": [
            "Apartment Complexes",
            "Luxury Apartments",
            "Student Housing",
            "Senior Living Apartments",
            "Pet-Friendly Apartments",
            "Furnished Apartments",
            "Loft Apartments",
            "Garden-Style Apartments",
            "Affordable Housing",
            "Co-op Apartments"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1607,
          "name": "Houses",
          "details": [
            {
              "Property Type": "House",
              "Location": "Suburban Neighborhood",
              "Number of Bedrooms": 4,
              "Number of Bathrooms": 3,
              "Lot Size": "0.25 acres",
              "House Size": "2,500 sqft",
              "Garage": true,
              "Swimming Pool": true,
              "Backyard": true,
              "Year Built": 2010,
              "Architectural Style": "Colonial",
              "Heating System": "Central Heating",
              "Cooling System": "Air Conditioning",
              "Kitchen Appliances": ["Stainless Steel Fridge", "Gas Stove", "Dishwasher"],
              "Flooring": ["Hardwood", "Tile", "Carpet"],
              "Fireplace": true,
              "Security System": true,
              "Price": "$500,000",
              "Property Taxes": "$5,000/year",
              "Legal Restrictions": "None",
              "Owner Financing": false,
              "Lease Options": false,
              "Available From": "Immediate",
              "Real Estate Agent": "YourName Realty",
              "Customer Ratings": 4.8,
              "Number of Reviews": 45,
              "Additional Notes": "Spacious 4-bedroom house in a quiet suburban neighborhood with modern amenities and a beautiful backyard."
            },
            // Add 24 more house entries with similar details
          ],
          "subcategories": [
            "Single-Family Homes",
            "Townhouses",
            "Villas",
            "Colonial Houses",
            "Craftsman Homes",
            "Ranch-Style Houses",
            "Contemporary Homes",
            "Historic Homes",
            "Beachfront Houses",
            "Mountain Homes"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1608,
          "name": "Office Spaces",
          "details": [
            {
              "Property Type": "Office Space",
              "Location": "Central Business District",
              "Floor Area": "10,000 sqft",
              "Number of Floors": 5,
              "Meeting Rooms": 3,
              "Private Offices": 20,
              "Open Workspace": true,
              "Kitchenette": true,
              "Restrooms": 4,
              "Parking Spaces": 15,
              "Year Built": 2015,
              "Architectural Style": "Modern",
              "Heating System": "HVAC",
              "Air Conditioning": true,
              "Furnished": true,
              "Security System": true,
              "Internet Connectivity": "High-speed Fiber Optic",
              "Lease Terms": "Flexible",
              "Price": "$1,000,000",
              "Property Taxes": "$10,000/year",
              "Legal Restrictions": "Zoned for Commercial Use",
              "Owner Financing": false,
              "Available From": "Immediate",
              "Real Estate Agent": "YourName Realty",
              "Customer Ratings": 4.9,
              "Number of Reviews": 30,
              "Additional Notes": "Modern and spacious office space in the heart of the Central Business District with state-of-the-art facilities and flexible lease terms."
            },
            // Add 24 more office space entries with similar details
          ],
          "subcategories": [
            "Office Buildings",
            "Shared Office Spaces",
            "Executive Suites",
            "Coworking Spaces",
            "Medical Offices",
            "Creative Office Spaces",
            "Sublease Offices",
            "Virtual Offices",
            "Flexible Workspaces",
            "Serviced Offices"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1609,
          "name": "Warehouses",
          "details": [
            {
              "Property Type": "Office Warehouse",
              "Location": "Industrial Park",
              "Total Space": "25,000 sqft",
              "Office Space": "5,000 sqft",
              "Warehouse Space": "20,000 sqft",
              "Loading Docks": 3,
              "Office Rooms": 10,
              "Meeting Rooms": 2,
              "Restrooms": 4,
              "Parking Spaces": 20,
              "Ceiling Height": "20 feet",
              "Roller Doors": 5,
              "Heating System": "Industrial HVAC",
              "Air Conditioning": "Office Space Only",
              "Furnished Office": true,
              "Security System": true,
              "Internet Connectivity": "High-speed Fiber Optic",
              "Lease Terms": "Negotiable",
              "Price": "$2,500,000",
              "Property Taxes": "$15,000/year",
              "Legal Restrictions": "Industrial Zoning",
              "Owner Financing": true,
              "Available From": "Immediate",
              "Real Estate Agent": "YourName Realty",
              "Customer Ratings": 4.8,
              "Number of Reviews": 25,
              "Additional Notes": "Versatile office warehouse in an industrial park with ample warehouse space, loading docks, and furnished office rooms. Ideal for logistics and distribution businesses."
            },
            // Add 24 more office warehouse entries with similar details
          ],   
          "subcategories": [
            "Industrial Warehouses",
            "Distribution Centers",
            "Cold Storage Warehouses",
            "Flex Warehouses",
            "Warehouse Condos",
            "Storage Units",
            "Warehouse Space for Lease",
            "E-commerce Fulfillment Centers",
            "Airport Warehouses",
            "High-Bay Warehouses"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1610,
          "name": "Vacation Rentals",
          "details": [
            {
              "Property Name": "Downtown Executive Suites",
              "Location": "City Center",
              "Space Type": "Office Vacation Rental",
              "Size": "2,500 sqft",
              "Workstations": 15,
              "Meeting Rooms": 2,
              "Kitchen Facilities": true,
              "Restrooms": 2,
              "Parking Spaces": 10,
              "High-speed Internet": true,
              "Furnished": true,
              "Air Conditioning": true,
              "Security System": true,
              "Cleaning Services": "Weekly",
              "Utilities Included": true,
              "Lease Terms": "Flexible",
              "Price": "$7,500/month",
              "Property Taxes": "Included",
              "Legal Restrictions": "Commercial Zoning",
              "Owner Financing": false,
              "Available From": "Immediate",
              "Real Estate Agent": "City Realty Group",
              "Customer Ratings": 4.8,
              "Number of Reviews": 20,
              "Additional Notes": "Luxurious office vacation rental with modern amenities, ideal for business retreats and temporary office setups."
            },
            // Add 24 more office vacation rental entries with similar details
          ],
          "subcategories": [
            "Beach House Rentals",
            "Mountain Cabin Rentals",
            "Ski Chalets",
            "Lakefront Cottages",
            "Luxury Vacation Homes",
            "Pet-Friendly Vacation Rentals",
            "Family Vacation Rentals",
            "Romantic Getaways",
            "Remote Retreats",
            "Eco-Friendly Stays"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1611,
          "name": "Hotels",
          "details": [
            {
              "Hotel Name": "BusinessHub Suites",
              "Location": "Financial District",
              "Property Type": "Office Hotel",
              "Floor Area": "3,000 sqft",
              "Workstations": 20,
              "Meeting Rooms": 3,
              "Conference Facilities": true,
              "Kitchenette": true,
              "Restrooms": 3,
              "Parking Facilities": 15,
              "High-speed Internet": true,
              "Fully Furnished": true,
              "Air Conditioning": true,
              "Security Services": true,
              "Cleaning Services": "Daily",
              "Utilities Included": true,
              "Lease Terms": "Flexible",
              "Price": "$9,500/month",
              "Property Taxes": "Included",
              "Legal Compliance": "Commercial Zoning",
              "Owner Financing": false,
              "Availability": "Immediate",
              "Real Estate Agent": "Metropolitan Realty",
              "Customer Ratings": 4.9,
              "Number of Reviews": 25,
              "Additional Notes": "Premium office hotel with state-of-the-art amenities, suitable for business travelers and corporate events."
            },
            // Add 24 more office hotel entries with similar details
          ],      
          "subcategories": [
            "Luxury Hotels",
            "Boutique Hotels",
            "Resorts",
            "Business Hotels",
            "Budget Hotels",
            "Beachfront Resorts",
            "Pet-Friendly Hotels",
            "Airport Hotels",
            "Spa Resorts",
            "Extended Stay Hotels"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1612,
          "name": "Resorts",
          "details": [
            {
              "Resort Name": "Paradise Oasis Resort",
              "Location": "Tropical Island",
              "Property Type": "Luxury Resort",
              "Accommodation Types": ["Beachfront Villa", "Ocean View Suite", "Garden Bungalow"],
              "Number of Rooms": 100,
              "Private Beach Access": true,
              "Swimming Pools": 5,
              "Spa and Wellness Center": true,
              "Fine Dining Restaurants": 3,
              "Bars and Lounges": 2,
              "Conference Facilities": true,
              "Water Sports": ["Scuba Diving", "Snorkeling", "Jet Skiing"],
              "Adventure Activities": ["Hiking", "Zip-lining", "Yachting"],
              "Wi-Fi Availability": true,
              "Air Conditioning": true,
              "24/7 Security": true,
              "Cleaning Services": "Daily",
              "Price Range": "$300 - $1,500 per night",
              "Ownership Type": "Freehold",
              "Legal Compliance": "Tourist Zoning",
              "Available for Events": true,
              "Real Estate Agent": "Tropical Realty",
              "Customer Ratings": 4.7,
              "Number of Reviews": 50,
              "Additional Notes": "Experience the ultimate luxury in our beachfront resort with world-class amenities and breathtaking views."
            },
            // Add 24 more resort entries with similar details
          ], 
          "subcategories": [
            "Beach Resorts",
            "Mountain Resorts",
            "Ski Resorts",
            "Golf Resorts",
            "Spa Resorts",
            "All-Inclusive Resorts",
            "Family Resorts",
            "Adults-Only Resorts",
            "Tropical Resorts",
            "Wilderness Resorts"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1613,
          "name": "Cottages",
          "details": [
            {
              "Cottage Name": "Cozy Haven Cottage",
              "Location": "Woodland Retreat",
              "Property Type": "Rustic Cottage",
              "Number of Bedrooms": 2,
              "Number of Bathrooms": 1,
              "Kitchen Facilities": true,
              "Fireplace": true,
              "Outdoor Deck": true,
              "Scenic Views": ["Forest", "Mountains"],
              "Pet-Friendly": true,
              "Wi-Fi Availability": true,
              "Air Conditioning": false,
              "Heating": true,
              "Parking Spaces": 2,
              "Land Area": "1 Acre",
              "Nearby Attractions": ["Hiking Trails", "Fishing Spot", "Wildlife Sanctuary"],
              "Ownership Type": "Freehold",
              "Legal Compliance": "Residential Zoning",
              "Price": "$150,000",
              "Real Estate Agent": "Nature Realty",
              "Customer Ratings": 4.5,
              "Number of Reviews": 30,
              "Additional Notes": "Escape to the tranquility of nature in this charming rustic cottage surrounded by lush woodlands."
            },
            // Add 24 more cottage entries with similar details
          ],
          "subcategories": [
            "Lakefront Cottages",
            "Secluded Cottages",
            "Cozy Cabins",
            "Beach Cottages",
            "Mountain Retreats",
            "Rustic Cottages",
            "Romantic Cottages",
            "Waterfront Cabins",
            "Remote Getaways",
            "Historic Cottages"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1614,
          "name": "Land Plots",
          "details": [
            {
              "Plot Name": "Green Valley Estates",
              "Location": "Serene Countryside",
              "Land Type": "Residential",
              "Land Area": "1 Acre",
              "Terrain Type": "Flat",
              "Zoning": "Residential",
              "Utilities Availability": ["Electricity", "Water", "Gas"],
              "Nearby Amenities": ["Schools", "Shopping Centers", "Parks"],
              "Legal Compliance": "Zoned for Residential Construction",
              "Price": "$50,000",
              "Real Estate Agent": "Harmony Realty",
              "Customer Ratings": 4.2,
              "Number of Reviews": 20,
              "Additional Notes": "Build your dream home in the picturesque Green Valley Estates with ample space and a peaceful environment."
            },
            // Add 24 more land plot entries with similar details
          ],
          "subcategories": [
            "Residential Lots",
            "Commercial Land",
            "Agricultural Land",
            "Rural Plots",
            "Urban Land Parcels",
            "Recreational Land",
            "Wooded Lots",
            "Farming Land",
            "Land with Utilities",
            "Vacant Land"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1615,
          "name": "Industrial Properties",
          "details": [
            {
              "Property Name": "TechHub Industrial Complex",
              "Location": "Industrial Zone, Metro City",
              "Property Type": "Manufacturing Facility",
              "Total Area": "5 Acres",
              "Factory Space": "3 Acres",
              "Office Space": "50,000 sq. ft.",
              "Warehouse Space": "20,000 sq. ft.",
              "Power Supply": "High Capacity (3 Phase)",
              "Utilities Availability": ["Water", "Gas", "High-Speed Internet"],
              "Loading Docks": 10,
              "Parking Capacity": "200+ Vehicles",
              "Security Features": ["Surveillance Cameras", "Access Control"],
              "Zoning": "Industrial",
              "Legal Compliance": "Meets all Industrial Safety Standards",
              "Price": "$2,500,000",
              "Real Estate Agent": "Metro Industrial Realty",
              "Customer Ratings": 4.5,
              "Number of Reviews": 15,
              "Additional Notes": "TechHub Industrial Complex offers state-of-the-art facilities for manufacturing and business operations."
            },
            // Add 24 more industrial property entries with similar details
          ],
          "subcategories": [
            "Industrial Warehouses",
            "Manufacturing Facilities",
            "Distribution Centers",
            "Office/Warehouse Buildings",
            "Flex Industrial Spaces",
            "Cold Storage Facilities",
            "High-Bay Warehouses",
            "Industrial Land",
            "Light Manufacturing Plants",
            "Specialized Industrial Properties"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1616,
          "name": "Farmhouses",
          "details": [
            {
              "Property Name": "Green Valley Farmhouse",
              "Location": "Countryside, Serene County",
              "Property Type": "Farmhouse",
              "Total Area": "10 Acres",
              "Living Space": "3,000 sq. ft.",
              "Bedrooms": 4,
              "Bathrooms": 3,
              "Kitchen Features": ["Modern Appliances", "Granite Countertops"],
              "Outdoor Amenities": ["Swimming Pool", "Garden", "Orchard"],
              "Utilities": ["Well Water", "Solar Power"],
              "Garage": "2-Car Garage",
              "Security Features": ["Fenced Perimeter", "Security System"],
              "Zoning": "Residential Agricultural",
              "Legal Compliance": "Meets All Building Codes",
              "Price": "$1,200,000",
              "Real Estate Agent": "Serene Realty Group",
              "Customer Ratings": 4.8,
              "Number of Reviews": 20,
              "Additional Notes": "Green Valley Farmhouse offers a peaceful retreat with modern amenities amidst lush greenery."
            },
            // Add 24 more farmhouse entries with similar details
          ],
          "subcategories": [
            "Working Farms",
            "Rural Farmhouses",
            "Farmhouse Estates",
            "Agricultural Properties",
            "Farmhouse Bed and Breakfasts",
            "Hobby Farms",
            "Equestrian Properties",
            "Organic Farms",
            "Farmhouse Renovations",
            "Farmhouse Land"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 17,
      "name": "Jobs",
      "subcategories": [
        {
          "id": 1701,
          "details": [
            {
              "Job Title": "Senior Software Engineer",
              "Company": "Tech Innovators Inc.",
              "Location": "Silicon Valley, CA",
              "Job Type": "Full-time",
              "Experience Required": "5+ years",
              "Skills Required": ["JavaScript", "React", "Node.js", "RESTful APIs"],
              "Education Requirements": "Bachelor's degree in Computer Science",
              "Responsibilities": ["Design and develop scalable software applications", "Collaborate with cross-functional teams", "Conduct code reviews"],
              "Benefits": ["Competitive salary", "Healthcare coverage", "401(k) plan"],
              "Application Deadline": "2023-12-15",
              "Contact Person": "Hiring Manager - Sarah Johnson",
              "Customer Ratings": 4.9,
              "Number of Reviews": 50,
              "Additional Notes": "Join our dynamic team of innovators and contribute to cutting-edge projects in the tech industry."
            },
            // Add 24 more job entries with similar details
          ],
          "name": "Information Technology",
          "subcategories": [
            "Software Engineer",
            "Data Scientist",
            "Web Developer",
            "Network Administrator",
            "Cybersecurity Analyst",
            "Database Administrator",
            "DevOps Engineer",
            "UI/UX Designer",
            "IT Support Specialist",
            "Cloud Solutions Architect"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1702,
          "name": "Healthcare",
          "details": [
            {
              "Job Title": "Registered Nurse",
              "Hospital": "City General Hospital",
              "Location": "New York, NY",
              "Job Type": "Full-time",
              "Experience Required": "2+ years",
              "Specialization": "Critical Care",
              "Education Requirements": "Bachelor of Science in Nursing (BSN)",
              "Responsibilities": ["Monitor patient vital signs", "Administer medications", "Collaborate with healthcare team"],
              "Benefits": ["Competitive salary", "Health insurance", "Tuition reimbursement"],
              "Application Deadline": "2023-12-20",
              "Contact Person": "HR Manager - Emily Rodriguez",
              "Customer Ratings": 4.8,
              "Number of Reviews": 30,
              "Additional Notes": "Join our dedicated team of healthcare professionals and make a difference in patient care."
            },
            // Add 24 more job entries with similar details
          ],
          "subcategories": [
            "Registered Nurse",
            "Physician",
            "Pharmacist",
            "Medical Assistant",
            "Dental Hygienist",
            "Physical Therapist",
            "Radiologic Technologist",
            "Clinical Laboratory Technician",
            "Nurse Practitioner",
            "Healthcare Administrator"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1703,
          "name": "Education",
          "details": [
            {
              "Job Title": "High School Math Teacher",
              "School": "Maplewood High School",
              "Location": "Chicago, IL",
              "Job Type": "Permanent",
              "Experience Required": "3+ years",
              "Subject": "Mathematics",
              "Education Requirements": "Bachelor's Degree in Education",
              "Responsibilities": ["Plan and deliver math lessons", "Assess student progress", "Participate in parent-teacher conferences"],
              "Benefits": ["Competitive salary", "Professional development opportunities", "Healthcare coverage"],
              "Application Deadline": "2023-12-15",
              "Contact Person": "Principal - Dr. Sarah Thompson",
              "Customer Ratings": 4.7,
              "Number of Reviews": 25,
              "Additional Notes": "Join our passionate team of educators and inspire students to excel in mathematics."
            },
            // Add 24 more job entries with similar details
          ],
          "subcategories": [
            "Teacher",
            "Principal",
            "School Counselor",
            "Special Education Teacher",
            "Librarian",
            "Curriculum Developer",
            "Education Administrator",
            "Tutor",
            "ESL Instructor",
            "Early Childhood Educator"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1704,
          "name": "Business",
          "details": [
            {
              "Job Title": "Marketing Manager",
              "Company": "InnovateTech Solutions",
              "Location": "New York, NY",
              "Job Type": "Full-Time",
              "Experience Required": "5+ years",
              "Industry": "Technology",
              "Responsibilities": ["Develop and execute marketing strategies", "Manage advertising campaigns", "Analyze market trends"],
              "Requirements": ["Bachelor's degree in Marketing or related field", "Strong communication and leadership skills"],
              "Salary Range": "$80,000 - $100,000",
              "Application Deadline": "2023-12-20",
              "Contact Person": "HR Manager - Emily Johnson",
              "Customer Ratings": 4.5,
              "Number of Reviews": 30,
              "Additional Notes": "Join our dynamic team and contribute to the growth of our technology solutions."
            },
            // Add 24 more job entries with similar details
          ],         
          "subcategories": [
            "Accountant",
            "Marketing Manager",
            "Financial Analyst",
            "Human Resources Specialist",
            "Sales Representative",
            "Business Analyst",
            "Management Consultant",
            "Entrepreneur",
            "Operations Manager",
            "Business Development Manager"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1705,
          "name": "Engineering",
          "details": [
            {
              "Job Title": "Software Engineer",
              "Company": "Tech Innovations Ltd.",
              "Location": "San Francisco, CA",
              "Job Type": "Full-Time",
              "Experience Required": "3+ years",
              "Engineering Discipline": "Software Engineering",
              "Responsibilities": ["Develop and maintain software applications", "Collaborate with cross-functional teams", "Conduct code reviews"],
              "Requirements": ["Bachelor's degree in Computer Science or related field", "Proficient in Java and JavaScript", "Experience with Agile methodologies"],
              "Salary Range": "$90,000 - $110,000",
              "Application Deadline": "2023-12-15",
              "Contact Person": "Engineering Manager - Alex Rodriguez",
              "Customer Ratings": 4.7,
              "Number of Reviews": 40,
              "Additional Notes": "Exciting opportunity to work on cutting-edge projects in a collaborative environment."
            },
            // Add 24 more job entries with similar details
          ],
          "subcategories": [
            "Civil Engineer",
            "Mechanical Engineer",
            "Electrical Engineer",
            "Aerospace Engineer",
            "Chemical Engineer",
            "Structural Engineer",
            "Environmental Engineer",
            "Biomedical Engineer",
            "Software Engineer",
            "Industrial Engineer"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1706,
          "name": "Hospitality",
          "details": [
            {
              "Job Title": "Hotel Manager",
              "Company": "Luxury Suites International",
              "Location": "New York, NY",
              "Job Type": "Full-Time",
              "Experience Required": "5+ years",
              "Department": "Hospitality Management",
              "Responsibilities": ["Oversee daily hotel operations", "Ensure guest satisfaction", "Manage staff and resources"],
              "Requirements": ["Bachelor's degree in Hospitality Management", "Proven experience in hotel management", "Strong leadership and communication skills"],
              "Salary Range": "$70,000 - $90,000",
              "Application Deadline": "2023-12-20",
              "Contact Person": "HR Manager - Emily Johnson",
              "Customer Ratings": 4.5,
              "Number of Reviews": 30,
              "Additional Notes": "Join our team and be part of delivering exceptional guest experiences in a luxury setting."
            },
            // Add 24 more job entries with similar details
          ],
          "subcategories": [
            "Hotel Manager",
            "Chef",
            "Bartender",
            "Event Planner",
            "Restaurant Manager",
            "Tour Guide",
            "Cruise Ship Staff",
            "Front Desk Clerk",
            "Travel Agent",
            "Resort Concierge"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1707,
          "name": "Finance",
          "details": [
            {
              "Job Title": "Senior Financial Analyst",
              "Company": "Global Finance Solutions",
              "Location": "Chicago, IL",
              "Job Type": "Full-Time",
              "Experience Required": "3-5 years",
              "Department": "Finance",
              "Responsibilities": ["Conduct financial analysis", "Prepare financial reports", "Provide budgeting and forecasting support"],
              "Requirements": ["Bachelor's degree in Finance", "CPA or CFA certification", "Proficiency in financial modeling and analysis"],
              "Salary Range": "$80,000 - $100,000",
              "Application Deadline": "2023-12-15",
              "Contact Person": "HR Manager - Michael Smith",
              "Customer Ratings": 4.7,
              "Number of Reviews": 40,
              "Additional Notes": "Join our dynamic finance team and contribute to strategic financial decision-making for our global clients."
            },
            // Add 24 more job entries with similar details
          ],
          "subcategories": [
            "Financial Advisor",
            "Investment Banker",
            "Accountant",
            "Financial Planner",
            "Loan Officer",
            "Actuary",
            "Credit Analyst",
            "Hedge Fund Manager",
            "Stockbroker",
            "Risk Analyst"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1708,
          "name": "Arts & Entertainment",
          "details": [
            {
              "Job Title": "Graphic Designer",
              "Company": "Creative Studios Inc.",
              "Location": "Los Angeles, CA",
              "Job Type": "Full-Time",
              "Experience Required": "2-4 years",
              "Department": "Design",
              "Responsibilities": ["Create visual concepts", "Develop layouts and graphics", "Collaborate with the marketing team"],
              "Requirements": ["Bachelor's degree in Graphic Design", "Proficient in Adobe Creative Suite", "Strong portfolio of design work"],
              "Salary Range": "$60,000 - $75,000",
              "Application Deadline": "2023-12-20",
              "Contact Person": "Creative Director - Emily Johnson",
              "Customer Ratings": 4.5,
              "Number of Reviews": 30,
              "Additional Notes": "Bring your creative vision to life and contribute to exciting projects in a dynamic and collaborative environment."
            },
            // Add 24 more job entries with similar details
          ],
          "subcategories": [
            "Actor",
            "Musician",
            "Graphic Designer",
            "Film Director",
            "Art Director",
            "Screenwriter",
            "Photographer",
            "Video Game Developer",
            "Makeup Artist",
            "Costume Designer"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1709,
          "name": "Retail",
          "details": [
            {
              "Job Title": "Store Manager",
              "Company": "Fashion Trends Retail",
              "Location": "New York, NY",
              "Job Type": "Full-Time",
              "Experience Required": "5-7 years",
              "Department": "Retail Management",
              "Responsibilities": ["Manage daily store operations", "Supervise and train staff", "Ensure sales targets are met"],
              "Requirements": ["Bachelor's degree in Business or related field", "Retail management experience", "Excellent communication skills"],
              "Salary Range": "$70,000 - $85,000",
              "Application Deadline": "2023-12-15",
              "Contact Person": "HR Manager - Jessica Williams",
              "Customer Ratings": 4.2,
              "Number of Reviews": 50,
              "Additional Notes": "Join our team and lead a thriving retail store, driving success through effective management and customer-focused strategies."
            },
            // Add 24 more job entries with similar details
          ],
          "subcategories": [
            "Retail Sales Associate",
            "Store Manager",
            "Visual Merchandiser",
            "Cashier",
            "Loss Prevention Specialist",
            "E-commerce Manager",
            "Buyer",
            "Inventory Clerk",
            "Retail Analyst",
            "Fashion Stylist",
            "Cafe Assistant"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1710,
          "name": "Construction",
          "details": [
            {
              "Job Title": "Construction Project Manager",
              "Company": "BuildWell Constructions",
              "Location": "Los Angeles, CA",
              "Job Type": "Full-Time",
              "Experience Required": "8-10 years",
              "Specialization": "Commercial Construction",
              "Responsibilities": ["Plan and oversee construction projects", "Coordinate with subcontractors", "Ensure compliance with safety regulations"],
              "Requirements": ["Bachelor's degree in Civil Engineering", "Proven experience in project management", "Knowledge of construction software"],
              "Salary Range": "$80,000 - $100,000",
              "Application Deadline": "2023-12-20",
              "Contact Person": "HR Manager - Michael Johnson",
              "Customer Ratings": 4.5,
              "Number of Reviews": 70,
              "Additional Notes": "Exciting opportunity to lead and manage high-profile construction projects. Join us in creating impressive structures that stand the test of time."
            },
            // Add 24 more job entries with similar details
          ],
          "subcategories": [
            "Construction Worker",
            "Architect",
            "Project Manager",
            "Electrician",
            "Plumber",
            "Carpenter",
            "Structural Engineer",
            "Heavy Equipment Operator",
            "Masonry Worker",
            "Safety Inspector"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 18,
      "name": "Services",
      "subcategories": [
        {
          "id": 1801,
          "name": "Home Services",
          "details": [
            {
              "Service Name": "Home Cleaning",
              "Service Type": "Cleaning",
              "Description": "Thorough cleaning of your home, including dusting, vacuuming, and sanitizing.",
              "Duration": "4 hours",
              "Service Providers": ["Trained Cleaning Professionals", "Eco-Friendly Cleaning Products"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$100 - $150",
              "Customer Ratings": 4.8,
              "Number of Reviews": 120,
              "Service Provider": "CleanSweep Services",
              "Additional Notes": "Create a healthy and tidy living environment with our top-notch home cleaning services."
            }
          ],
          "subcategories": [
            "Plumbing Services",
            "Electrical Services",
            "HVAC Services",
            "Carpentry Services",
            "Roofing Services",
            "Landscaping Services",
            "House Cleaning Services",
            "Appliance Repair Services",
            "Pest Control Services",
            "Home Renovation Services"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1802,
          "name": "Professional Services",
          "details": [
            {
              "Service Name": "Business Consulting",
              "Service Type": "Consulting",
              "Description": "Strategic guidance for businesses to improve operations and achieve goals.",
              "Duration": "1 month",
              "Service Providers": ["Experienced Consultants", "Customized Solutions"],
              "Materials Included": false,
              "Guarantee": true,
              "Price Range": "$1,000 - $5,000",
              "Customer Ratings": 4.9,
              "Number of Reviews": 150,
              "Service Provider": "Stratagem Consulting",
              "Additional Notes": "Drive your business forward with our expert consulting services tailored to your needs."
            },],
          "subcategories": [
            "Legal Services",
            "Accounting Services",
            "Financial Planning Services",
            "Marketing Services",
            "Consulting Services",
            "Real Estate Services",
            "IT Services",
            "Tax Preparation Services",
            "Human Resources Services",
            "Translation Services"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1803,
          "name": "Health & Wellness Services",
          "details": [
            {
              "Service Name": "Holistic Wellness Coaching",
              "Service Type": "Wellness Coaching",
              "Description": "Guidance on achieving overall health and balance through holistic practices.",
              "Duration": "3 months",
              "Service Providers": ["Certified Wellness Coaches", "Personalized Plans"],
              "Materials Included": false,
              "Guarantee": true,
              "Price Range": "$300 - $1,000",
              "Customer Ratings": 4.9,
              "Number of Reviews": 150,
              "Service Provider": "Harmony Wellness",
              "Additional Notes": "Transform your life with our holistic wellness coaching, addressing mind, body, and spirit."
            },],
          "subcategories": [
            "Massage Therapy Services",
            "Fitness Training Services",
            "Nutrition Counseling Services",
            "Mental Health Counseling Services",
            "Chiropractic Services",
            "Acupuncture Services",
            "Dental Services",
            "Medical Spa Services",
            "Holistic Healing Services",
            "Physical Therapy Services"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1804,
          "name": "Event Planning & Entertainment Services",
          "details": [
            {
              "Service Name": "Full-Service Event Planning",
              "Service Type": "Event Planning",
              "Description": "Comprehensive event planning services for weddings, corporate events, and more.",
              "Duration": "Customized",
              "Service Providers": ["Certified Event Planners", "Vendor Coordination"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$1,000 - $10,000",
              "Customer Ratings": 4.9,
              "Number of Reviews": 200,
              "Service Provider": "Epic Events Management",
              "Additional Notes": "Turn your vision into reality with our full-service event planning, creating unforgettable experiences."
            },],
          "subcategories": [
            "Event Planning Services",
            "DJ Services",
            "Catering Services",
            "Photography Services",
            "Videography Services",
            "Wedding Planning Services",
            "Party Rental Services",
            "Magician Services",
            "Event Decoration Services",
            "Live Entertainment Services"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1805,
          "name": "Automotive Services",
          "details": [
            {
              "Service Name": "Full-Service Auto Repair",
              "Service Type": "Auto Repair",
              "Description": "Comprehensive auto repair services for all makes and models.",
              "Duration": "Varies",
              "Service Providers": ["ASE Certified Technicians", "State-of-the-Art Facilities"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$50 - $1,000",
              "Customer Ratings": 4.9,
              "Number of Reviews": 200,
              "Service Provider": "Precision Auto Care",
              "Additional Notes": "Trust us for reliable and efficient auto repairs, ensuring your vehicle runs smoothly."
            },],
          "subcategories": [
            "Auto Repair Services",
            "Car Detailing Services",
            "Towing Services",
            "Auto Body Repair Services",
            "Oil Change Services",
            "Car Rental Services",
            "Auto Glass Repair Services",
            "Brake Repair Services",
            "Car Wash Services",
            "Mobile Mechanic Services"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1806,
          "name": "Beauty & Personal Care Services",
          "details": [
            {
              "Service Name": "Spa Facial and Relaxation",
              "Service Type": "Facial",
              "Description": "Indulge in a spa facial for ultimate relaxation and skin rejuvenation.",
              "Duration": "1 Hour",
              "Service Providers": ["Licensed Estheticians", "Natural and Organic Products"],
              "Materials Included": false,
              "Guarantee": true,
              "Price Range": "$80 - $120",
              "Customer Ratings": 4.8,
              "Number of Reviews": 150,
              "Service Provider": "Serene Spa Retreat",
              "Additional Notes": "Pamper yourself with our spa facial, designed to leave your skin radiant and stress-free."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            "Hair Salon Services",
            "Nail Salon Services",
            "Spa Services",
            "Barber Shop Services",
            "Makeup Artist Services",
            "Skin Care Services",
            "Tattoo & Piercing Services",
            "Eyelash Extension Services",
            "Massage Services",
            "Mobile Beauty Services"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1807,
          "name": "Educational Services",
          "details": [
            {
              "Service Name": "Private Tutoring",
              "Service Type": "Tutoring",
              "Description": "One-on-one tutoring sessions tailored to individual learning needs.",
              "Duration": "1 Hour",
              "Service Providers": ["Certified Tutors", "Customized Learning Plans"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$30 - $50",
              "Customer Ratings": 4.9,
              "Number of Reviews": 200,
              "Service Provider": "Academic Excellence Tutors",
              "Additional Notes": "Boost academic performance with personalized tutoring, covering various subjects and grade levels."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            "Tutoring Services",
            "Language Learning Services",
            "Test Preparation Services",
            "Music Lessons Services",
            "Art Lessons Services",
            "Online Learning Services",
            "College Counseling Services",
            "STEM Education Services",
            "Special Education Services",
            "Parenting Classes Services"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1808,
          "name": "Travel & Transportation Services",
          "details": [
            {
              "Service Name": "Airport Shuttle Service",
              "Service Type": "Transportation",
              "Description": "Reliable airport shuttle service for convenient and timely transportation.",
              "Duration": "Varies",
              "Service Providers": ["Licensed Drivers", "Comfortable Vehicles"],
              "Materials Included": false,
              "Guarantee": true,
              "Price Range": "$25 - $50",
              "Customer Ratings": 4.7,
              "Number of Reviews": 150,
              "Service Provider": "Skyway Shuttle Services",
              "Additional Notes": "Efficient and hassle-free transportation to and from the airport, ensuring a smooth travel experience."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            "Travel Agency Services",
            "Airport Shuttle Services",
            "Limousine Services",
            "Car Rental Services",
            "Tour Guide Services",
            "Pet Transportation Services",
            "Freight Shipping Services",
            "Boat Charter Services",
            "Bicycle Rental Services",
            "RV Rental Services"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1809,
          "name": "Cleaning & Maintenance Services",
          "details": [
            {
              "Service Name": "House Cleaning",
              "Service Type": "Cleaning & Maintenance",
              "Description": "Professional house cleaning services for a spotless and sanitized home.",
              "Duration": "2-4 Hours",
              "Service Providers": ["Trained Cleaning Staff", "Eco-Friendly Cleaning Products"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$80 - $150",
              "Customer Ratings": 4.9,
              "Number of Reviews": 200,
              "Service Provider": "Sparkling Homes Cleaning Co.",
              "Additional Notes": "Transform your living space into a clean and refreshing environment with our meticulous house cleaning services."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            "Commercial Cleaning Services",
            "Window Cleaning Services",
            "Janitorial Services",
            "Pool Cleaning Services",
            "Carpet Cleaning Services",
            "Lawn Care Services",
            "Gutter Cleaning Services",
            "Pressure Washing Services",
            "Home Inspection Services",
            "Pest Inspection Services"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1810,
          "name": "Technology & IT Services",
          "details": [
            {
              "Service Name": "IT Consultation",
              "Service Type": "Technology & IT Services",
              "Description": "Expert IT consultation services to optimize your business technology.",
              "Duration": "Flexible",
              "Service Providers": ["Certified IT Consultants", "Customized Solutions"],
              "Materials Included": false,
              "Guarantee": true,
              "Price Range": "$100 - $300 per hour",
              "Customer Ratings": 4.8,
              "Number of Reviews": 150,
              "Service Provider": "TechStrive Solutions",
              "Additional Notes": "Enhance your business efficiency with our tailored IT solutions and strategic consultation."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            "IT Consulting Services",
            "Software Development Services",
            "Cybersecurity Services",
            "Cloud Computing Services",
            "Network Setup Services",
            "Data Recovery Services",
            "Tech Support Services",
            "Digital Marketing Services",
            "Web Design Services",
            "E-commerce Development Services"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 19,
      "name": "Antiques & Collectibles",
      "subcategories": [
        {
          "id": 1901,
          "name": "Vintage Toys",
          "details": [
            {
              "Product Name": "Vintage Tin Robot",
              "Brand": "RetroMech",
              "Product Type": "Collectible Toy",
              "Material": "Tin",
              "Color Options": ["Silver", "Red", "Blue"],
              "Dimensions": "8'' x 4'' x 2''",
              "Year of Manufacture": 1950,
              "Condition": "Excellent",
              "Packaging": "Original Box",
              "Limited Edition": true,
              "Certificate of Authenticity": true,
              "Price": "$199.99",
              "Customer Ratings": 4.9,
              "Number of Reviews": 50,
              "Seller": "Timeless Toys Emporium",
              "Additional Notes": "Own a piece of nostalgia with this vintage tin robot, a true collector's item from the golden era of toys."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Antique Dolls",
            "Collectible Action Figures",
            "Vintage Model Trains",
            "Rare Toy Cars",
            "Vintage Board Games",
            "Classic Teddy Bears",
            "Collectible Barbie Dolls",
            "Vintage Tin Toys",
            "Rare Stuffed Animals",
            "Vintage Toy Robots"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1902,
          "name": "Coins & Currency",
          "details": [
            {
              "Product Name": "Rare Silver Dollar",
              "Type": "Coin",
              "Material": "Silver",
              "Year of Minting": 1885,
              "Country of Origin": "United States",
              "Denomination": "One Dollar",
              "Condition": "Uncirculated",
              "Mint Mark": "CC",
              "Certification": "NGC Graded",
              "Grade": "MS-63",
              "Price": "$1,500",
              "Customer Ratings": 4.7,
              "Number of Reviews": 30,
              "Seller": "Numismatic Treasures",
              "Additional Notes": "A rare silver dollar with a historic significance, perfect for serious coin collectors and numismatists."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Rare Coins",
            "Ancient Coins",
            "Paper Money",
            "Numismatic Sets",
            "Gold Bullion Coins",
            "Silver Dollar Coins",
            "Foreign Currency Notes",
            "Error Coins",
            "Commemorative Coins",
            "Coin Albums & Holders"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1903,
          "name": "Stamps & Postal Collectibles",
          "details": [
            {
              "Product Name": "Rare Penny Black Stamp",
              "Type": "Stamp",
              "Country of Origin": "United Kingdom",
              "Year of Issue": 1840,
              "Denomination": "One Penny",
              "Condition": "Mint",
              "Perforation": "Imperforated",
              "Watermark": "Crown and CC",
              "Certification": "Philatelic Foundation",
              "Grade": "VF (Very Fine)",
              "Price": "$2,000",
              "Customer Ratings": 4.8,
              "Number of Reviews": 25,
              "Seller": "Philately World",
              "Additional Notes": "The Penny Black, the world's first adhesive postage stamp, is a prized possession for stamp collectors and enthusiasts."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Rare Stamps",
            "Stamp Albums",
            "First Day Covers",
            "Postal History",
            "Stamp Sheets & Blocks",
            "Stamp Collecting Supplies",
            "Foreign Stamps",
            "Thematic Stamps",
            "Postmarks & Cancels",
            "Stamp Catalogs"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1904,
          "name": "Art & Paintings",
          "details": [
            {
              "Artwork Title": "Starry Night",
              "Artist": "Vincent van Gogh",
              "Art Style": "Post-Impressionism",
              "Medium": "Oil on Canvas",
              "Year Created": 1889,
              "Dimensions": "29 in × 36 1/4 in",
              "Frame Included": true,
              "Signature": "Signed 'Vincent' in the bottom right corner",
              "Certification": "Art Authentication Board",
              "Condition": "Excellent",
              "Price": "$3,500,000",
              "Customer Ratings": 4.9,
              "Number of Reviews": 50,
              "Seller": "Masterpiece Gallery",
              "Additional Notes": "Starry Night is one of van Gogh's most famous and iconic works, capturing the beauty of the night sky in a unique and expressive style."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Fine Art Paintings",
            "Antique Portraits",
            "Impressionist Art",
            "Modern Art Prints",
            "Sculptures & Statues",
            "Vintage Posters",
            "Folk Art Collectibles",
            "Asian Artifacts",
            "Decorative Art",
            "Oil Paintings"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1905,
          "name": "Collectible Books",
          "details": [
            {
              "Book Title": "To Kill a Mockingbird",
              "Author": "Harper Lee",
              "Genre": "Classic Fiction",
              "Publication Year": 1960,
              "Publisher": "J.B. Lippincott & Co.",
              "Edition": "First Edition, First Printing",
              "Condition": "Like New",
              "Cover Type": "Hardcover",
              "Signed": false,
              "Dust Jacket": true,
              "ISBN": "9780061120084",
              "Price": "$2,500",
              "Customer Ratings": 4.8,
              "Number of Reviews": 30,
              "Seller": "Rare Books Emporium",
              "Additional Notes": "A highly collectible first edition of Harper Lee's masterpiece, with a well-preserved dust jacket."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Rare First Edition Books",
            "Antique Manuscripts",
            "Vintage Comic Books",
            "Signed Editions",
            "Collectible Book Sets",
            "Historical Documents",
            "Rare Bookmarks",
            "Literary Magazines",
            "Rare Bookplates",
            "Autographed Books"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1906,
          "name": "Historical Memorabilia",
          "details": [
            {
              "Item Name": "Civil War Era Sword",
              "Era": "American Civil War (1861-1865)",
              "Material": "Steel",
              "Condition": "Excellent",
              "Provenance": "Verified",
              "Engravings": true,
              "Length": "36 inches",
              "Includes Sheath": true,
              "Authentication": "Certificate of Authenticity",
              "Price": "$1,200",
              "Customer Ratings": 4.9,
              "Number of Reviews": 15,
              "Seller": "Historical Relics Co.",
              "Additional Notes": "A well-preserved Civil War era sword, a testament to the historical significance of the period."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Civil War Memorabilia",
            "World War II Collectibles",
            "Political Campaign Items",
            "Vintage Postcards",
            "Presidential Memorabilia",
            "Historical Documents",
            "Antique Maps",
            "Collectible Medals",
            "Vintage Newspapers",
            "Military Badges & Patches"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1907,
          "name": "Sports Memorabilia",
          "details": [
            {
              "Item Name": "Autographed Baseball - Babe Ruth",
              "Sport": "Baseball",
              "Player": "Babe Ruth",
              "Signature": "Authentic Signature",
              "Year Signed": 1933,
              "Condition": "Mint",
              "Inscription": "To a Baseball Legend",
              "Authentication": "Third-party Authentication",
              "Display Case Included": true,
              "Price": "$25,000",
              "Customer Ratings": 4.8,
              "Number of Reviews": 20,
              "Seller": "Sports Legends Collectibles",
              "Additional Notes": "Own a piece of baseball history with this autographed baseball from the legendary Babe Ruth."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Autographed Sports Cards",
            "Game-Worn Jerseys",
            "Sports Memorabilia Displays",
            "Collectible Baseballs",
            "Sports Trading Pins",
            "Vintage Sports Magazines",
            "Olympic Memorabilia",
            "Sports Memorabilia Cases",
            "Sports Ticket Stubs",
            "Sports Memorabilia Authentication"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1908,
          "name": "Music & Records",
          "details": [
            {
              "Album Name": "The Dark Side of the Moon",
              "Artist": "Pink Floyd",
              "Genre": "Progressive Rock",
              "Release Year": 1973,
              "Format": "Vinyl LP",
              "Condition": "Excellent",
              "Limited Edition": false,
              "Tracks": ["Speak to Me", "Breathe", "On the Run", "Time", "The Great Gig in the Sky", "Money", "Us and Them", "Any Colour You Like", "Brain Damage", "Eclipse"],
              "Album Cover": "Original Artwork",
              "Price": "$150",
              "Customer Ratings": 4.9,
              "Number of Reviews": 50,
              "Seller": "Vintage Vinyl Emporium",
              "Additional Notes": "Experience the iconic album in its original vinyl format with this excellent condition Pink Floyd masterpiece."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Vinyl Records",
            "Vintage Music Instruments",
            "Collectible Sheet Music",
            "Music Memorabilia",
            "Rare Record Albums",
            "Vintage Guitars",
            "Concert Posters",
            "Music Autographs",
            "Rock 'n' Roll Collectibles",
            "Music Boxes"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1909,
          "name": "Antique Furniture",
          "details": [
            {
              "Item Name": "Victorian Mahogany Wardrobe",
              "Style": "Victorian",
              "Wood Type": "Mahogany",
              "Period": "19th Century",
              "Dimensions": "78'' H x 48'' W x 22'' D",
              "Condition": "Excellent",
              "Inlays": ["Brass", "Mother of Pearl"],
              "Features": ["Mirrored Door", "Carved Details", "Original Hardware"],
              "Provenance": "Family Estate",
              "Price": "$2,500",
              "Customer Ratings": 4.8,
              "Number of Reviews": 30,
              "Seller": "Antique Treasures Gallery",
              "Additional Notes": "A stunning Victorian mahogany wardrobe with intricate details, perfect for adding a touch of history to your home."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Vintage Tables & Chairs",
            "Antique Cabinets",
            "Collectible Desks",
            "Vintage Wardrobes",
            "Rare Chests & Trunks",
            "Antique Clocks",
            "Vintage Mirrors",
            "Decorative Screens",
            "Fine Antique Seating",
            "Vintage Bed Frames"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 1910,
          "name": "Collectible Glass & China",
          "details": [
            {
              "Item Name": "Fine Porcelain Tea Set",
              "Material": "Porcelain",
              "Style": "Traditional",
              "Pattern": "Floral Bouquet",
              "Includes": ["Teapot", "Teacups", "Saucers", "Sugar Bowl", "Creamer"],
              "Color": "White with Gold Trim",
              "Manufacturer": "Royal Elegance Porcelain",
              "Condition": "Mint",
              "Age": "Vintage (circa 1950s)",
              "Price": "$300",
              "Customer Ratings": 4.9,
              "Number of Reviews": 25,
              "Seller": "Vintage Treasures Emporium",
              "Additional Notes": "Exquisite porcelain tea set featuring a delicate floral pattern, perfect for tea enthusiasts and collectors alike."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Antique Glassware",
            "Collectible China Plates",
            "Vintage Crystal",
            "Depression Glass",
            "Milk Glass Collectibles",
            "Fenton Glass",
            "Ceramic Figurines",
            "Porcelain Tea Sets",
            "Stemware & Goblets",
            "Carnival Glass"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 20,
      "name": "Baby Gear",
      "subcategories": [
        {
          "id": 2001,
          "name": "Strollers & Carriages",
          "details": [
            {
              "Product Name": "Luxury Travel System Stroller",
              "Brand": "BabyLux",
              "Type": "Travel System",
              "Color Options": ["Midnight Black", "Royal Blue", "Blush Pink"],
              "Features": ["Convertible", "Reversible Seat", "Adjustable Canopy", "One-Hand Fold"],
              "Weight Capacity": "Up to 50 lbs",
              "Wheel Type": "All-Terrain",
              "Safety Features": ["5-Point Harness", "Adjustable Handlebar", "Parking Brake"],
              "Storage Basket": true,
              "Price": "$399.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 150,
              "Manufacturer": "BabyLux Innovations",
              "Additional Notes": "Experience the epitome of comfort and style with our luxury travel system stroller, designed to make parenting effortless."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Full-Size Strollers",
            "Lightweight Strollers",
            "Travel Systems",
            "Double Strollers",
            "Jogging Strollers",
            "Car Seat Carriers",
            "Umbrella Strollers",
            "Convertible Car Seats",
            "Booster Seats",
            "Baby Carriages"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 2002,
          "name": "Baby Furniture",
          "details": [
            {
              "Product Name": "Convertible Crib and Changing Table Set",
              "Brand": "NurseryDreams",
              "Type": "Convertible Crib",
              "Color Options": ["White", "Espresso", "Natural Wood"],
              "Material": "Solid Pine Wood",
              "Convertible Stages": ["Crib", "Toddler Bed", "Daybed", "Full-Size Bed"],
              "Changing Table": true,
              "Storage Drawers": 2,
              "Adjustable Mattress Height": true,
              "Price": "$349.99",
              "Customer Ratings": 4.9,
              "Number of Reviews": 200,
              "Manufacturer": "NurseryDreams Co.",
              "Additional Notes": "Create the perfect nursery with our versatile and stylish convertible crib and changing table set. Crafted for comfort and convenience."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Cribs & Toddler Beds",
            "Changing Tables",
            "Baby Dressers",
            "Bassinets & Cradles",
            "Nursery Gliders",
            "Baby High Chairs",
            "Playpens & Playards",
            "Baby Rocking Chairs",
            "Nursery Shelving",
            "Baby Bedding Sets"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 2003,
          "name": "Baby Safety & Health",
          "details": [
            {
              "Product Name": "Digital Baby Monitor with Camera",
              "Brand": "SafeGuard",
              "Type": "Video Baby Monitor",
              "Screen Size": "5 inches",
              "Wireless Range": "300 feet",
              "Night Vision": true,
              "Two-Way Communication": true,
              "Temperature Sensor": true,
              "Lullabies": ["Twinkle, Twinkle", "Brahms' Lullaby", "White Noise"],
              "Mounting Options": ["Tabletop", "Wall-Mounted"],
              "Price": "$129.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 150,
              "Manufacturer": "SafeGuard Technologies",
              "Additional Notes": "Ensure your baby's safety with our high-tech digital baby monitor. Keep an eye on your little one with advanced features for peace of mind."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Baby Monitors",
            "Safety Gates",
            "Outlet Covers",
            "Corner Protectors",
            "Baby Proofing Kits",
            "Child Safety Locks",
            "Baby Thermometers",
            "Nasal Aspirators",
            "Baby First Aid Kits",
            "Baby Proofing Services"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 2004,
          "name": "Diapers & Potty Training",
          "details": [
            {
              "Product Name": "UltraSoft Diapers Pack",
              "Brand": "ComfyCare",
              "Type": "Disposable Diapers",
              "Size Options": ["Newborn", "Small", "Medium", "Large"],
              "Absorbency Level": "Super Absorbent",
              "Hypoallergenic": true,
              "Wetness Indicator": true,
              "Diaper Changing Mats": ["Scented", "Disposable"],
              "Pack Quantity": 50,
              "Price": "$24.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 120,
              "Manufacturer": "ComfyCare Baby Products",
              "Additional Notes": "Keep your baby dry and comfortable with our UltraSoft Diapers. The perfect choice for hassle-free diaper changing."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Disposable Diapers",
            "Cloth Diapers",
            "Diaper Bags",
            "Baby Wipes",
            "Diaper Pails",
            "Potty Chairs",
            "Training Pants",
            "Diaper Rash Creams",
            "Changing Pads",
            "Diaper Sprayers"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 2005,
          "name": "Feeding & Nursing",
          "details": [
            {
              "Product Name": "ComfortFlow Baby Bottles Set",
              "Brand": "NourishNest",
              "Type": "Anti-Colic Bottles",
              "Capacity": "8 oz",
              "Nipple Type": ["Slow Flow", "Medium Flow"],
              "Bottle Material": "BPA-Free Plastic",
              "Dishwasher Safe": true,
              "Microwave Safe": false,
              "Bottle Sterilizer": true,
              "Set Includes": ["4 Bottles", "2 Pacifiers", "Bottle Brush"],
              "Price": "$29.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 150,
              "Manufacturer": "NourishNest Baby Essentials",
              "Additional Notes": "Ensure a comfortable feeding experience for your baby with our ComfortFlow Baby Bottles. Anti-colic design for happy and content feeding times."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Baby Bottles",
            "Breast Pumps",
            "Nursing Pillows",
            "Baby Formula",
            "Baby Food Makers",
            "High Chair Boosters",
            "Baby Feeding Spoons",
            "Bottle Sterilizers",
            "Breast Milk Storage",
            "Nipple Shields"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 2006,
          "name": "Baby Clothing",
          "details": [
            {
              "Product Name": "CozyCloud Infant Onesies",
              "Brand": "SnuggleBuds",
              "Clothing Type": "Cotton Onesies",
              "Size Options": ["Newborn", "3-6 months", "6-12 months"],
              "Color Varieties": ["Pastel Pink", "Sky Blue", "Soft Yellow"],
              "Material": "100% Cotton",
              "Machine Washable": true,
              "Snap Closure": true,
              "Set Includes": ["5 Onesies"],
              "Price": "$19.99",
              "Customer Ratings": 4.9,
              "Number of Reviews": 200,
              "Manufacturer": "SnuggleBuds Kids Fashion",
              "Additional Notes": "Keep your little one comfortable and stylish with our CozyCloud Infant Onesies. Soft and breathable cotton for happy baby adventures."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Newborn Onesies",
            "Baby Sleepers",
            "Infant Bodysuits",
            "Baby Socks & Shoes",
            "Baby Hats & Caps",
            "Baby Outerwear",
            "Baby Dresses",
            "Baby Pants & Leggings",
            "Baby Swimwear",
            "Baby Accessories"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 2007,
          "name": "Baby Toys & Activities",
          "details": [
            {
              "Product Name": "PlayfulPlush Sensory Play Mat",
              "Brand": "JoyfulJuniors",
              "Toy Type": "Sensory Play Mat",
              "Design Options": ["Farm Animals", "Underwater World", "Cityscape"],
              "Material": "Soft Fabric",
              "Machine Washable": true,
              "Interactive Features": ["Crinkly Textures", "Squeaky Toys", "Mirror"],
              "Developmental Benefits": ["Tactile Stimulation", "Visual Exploration", "Cognitive Development"],
              "Dimensions": "36'' x 36''",
              "Age Range": "3 months and up",
              "Price": "$29.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 150,
              "Manufacturer": "JoyfulJuniors Baby Toys",
              "Additional Notes": "Engage your baby's senses with our PlayfulPlush Sensory Play Mat. Perfect for tummy time and sensory exploration."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Baby Rattles",
            "Teething Toys",
            "Soft Baby Books",
            "Activity Gyms",
            "Baby Playmats",
            "Musical Mobiles",
            "Baby Walkers",
            "Baby Bouncers",
            "Educational Toys",
            "Baby Mirrors"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 2008,
          "name": "Baby Bath & Skincare",
          "details": [
            {
              "Product Name": "GentleGlow Baby Shampoo & Body Wash",
              "Brand": "TenderTouch",
              "Product Type": "Shampoo & Body Wash",
              "Scent Options": ["Calming Lavender", "Fresh Chamomile", "Unscented"],
              "Hypoallergenic": true,
              "Tear-Free Formula": true,
              "Ingredients": ["Organic Aloe Vera", "Chamomile Extract", "Vitamin E"],
              "Pediatrician Recommended": true,
              "Size": "10 oz",
              "Age Recommendation": "Newborn and up",
              "Price": "$12.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 120,
              "Manufacturer": "TenderTouch Baby Care",
              "Additional Notes": "Keep your baby clean and happy with our GentleGlow Shampoo & Body Wash. Formulated with care for your little one's delicate skin."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Baby Shampoo & Wash",
            "Baby Lotion",
            "Diaper Cream",
            "Baby Towels & Washcloths",
            "Baby Bathtubs",
            "Hooded Baby Towels",
            "Baby Bath Seats",
            "Baby Hairbrushes",
            "Baby Skin Care Sets",
            "Baby Bath Thermometers"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 2009,
          "name": "Baby Gear Accessories",
          "details": [
            {
              "Product Name": "CozyCloud Baby Blanket",
              "Brand": "SnuggleBuddy",
              "Product Type": "Blanket",
              "Material": ["Soft Cotton", "Plush Polyester"],
              "Color Options": ["Pink", "Blue", "Neutral Gray"],
              "Size": "40'' x 30''",
              "Multi-Purpose": ["Stroller Cover", "Nursing Cover", "Playmat"],
              "Machine Washable": true,
              "Price": "$19.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 150,
              "Manufacturer": "SnuggleBuddy Baby Essentials",
              "Additional Notes": "Wrap your little one in warmth with our CozyCloud Baby Blanket. Versatile and irresistibly soft for all your baby's needs."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Stroller Organizers",
            "Car Seat Covers",
            "Pacifiers & Teethers",
            "Baby Car Mirrors",
            "Baby Carrier Accessories",
            "Baby Diaper Caddies",
            "Baby Bottle Warmers",
            "Stroller Fans",
            "Baby Gear Bags",
            "Baby Gear Cleaning Supplies"
          ].map((name, index) => ({ id: index + 1, name }))
        },
        {
          "id": 2010,
          "name": "Baby Travel Gear",
          "details": [
            {
              "Product Name": "TravelEase Baby Stroller",
              "Brand": "JourneyJoy",
              "Product Type": "Stroller",
              "Color Options": ["Red", "Gray", "Black"],
              "Foldable Design": true,
              "Adjustable Canopy": true,
              "Five-Point Harness": true,
              "Storage Basket": true,
              "Wheel Locks": true,
              "Weight Capacity": "Up to 50 lbs",
              "Compact Fold Size": "20'' x 15'' x 10''",
              "Travel-Friendly": ["Airplane Carry-On", "Compact Storage"],
              "Price": "$129.99",
              "Customer Ratings": 4.9,
              "Number of Reviews": 200,
              "Manufacturer": "JourneyJoy Baby Essentials",
              "Additional Notes": "Experience hassle-free travel with our TravelEase Baby Stroller. Compact, secure, and designed for on-the-go families."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            "Baby Carriers",
            "Baby Travel Cribs",
            "Diaper Bags",
            "Portable Changing Pads",
            "Baby Stroller Travel Bags",
            "Baby Backpack Carriers",
            "Car Seat Travel Accessories",
            "Baby Travel Blankets",
            "Baby Car Window Shades",
            "Baby Travel Safety Gear"
          ].map((name, index) => ({ id: index + 1, name }))
        }
      ]
    },
    {
      "id": 21,
      "name": "Building and Renovations",
      "subcategories": [
        {
          "id": 2101,
          "name": "Construction Materials",
          "details": [
            {
              "Product Name": "Premium Plywood Sheets",
              "Brand": "BuildMaster",
              "Material Type": "Hardwood",
              "Size Options": ["4' x 8'", "5' x 10'", "6' x 12'"],
              "Thickness Options": ["1/2 inch", "3/4 inch", "1 inch"],
              "Grade": "A-Grade",
              "Moisture Resistance": true,
              "Usage": ["Interior", "Exterior"],
              "Price per Sheet": "$29.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 150,
              "Manufacturer": "BuildMaster Building Solutions",
              "Additional Notes": "Build with confidence using our Premium Plywood Sheets. Durable, versatile, and suitable for various construction projects."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            {"id": 210101, "name": "Lumber and Timber"},
            {"id": 210102, "name": "Concrete and Cement"},
            {"id": 210103, "name": "Bricks and Blocks"},
            {"id": 210104, "name": "Roofing Materials"},
            {"id": 210105, "name": "Insulation Materials"},
            {"id": 210106, "name": "Drywall and Sheetrock"},
            {"id": 210107, "name": "Siding and Cladding"},
            {"id": 210108, "name": "Windows and Doors"},
            {"id": 210109, "name": "Flooring Materials"},
            {"id": 210110, "name": "Paints and Coatings"}
          ]
        },
        {
          "id": 2102,
          "name": "Tools and Equipment",
          "details": [
            {
              "Product Name": "Professional Power Drill Set",
              "Brand": "ToolTech",
              "Tool Type": "Cordless Drill",
              "Voltage": "18V",
              "Battery Type": "Lithium-Ion",
              "Chuck Size": "1/2 inch",
              "Speed Options": ["Low", "Medium", "High"],
              "Accessories": ["Drill Bits", "Screwdriver Attachments", "Carrying Case"],
              "Variable Speed": true,
              "LED Light": true,
              "Price": "$99.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 200,
              "Manufacturer": "ToolTech Innovations",
              "Additional Notes": "Empower your construction projects with our Professional Power Drill Set. Versatile, powerful, and built for precision."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            {"id": 210201, "name": "Power Tools"},
            {"id": 210202, "name": "Hand Tools"},
            {"id": 210203, "name": "Construction Machinery"},
            {"id": 210204, "name": "Safety Equipment"},
            {"id": 210205, "name": "Measuring and Layout Tools"},
            {"id": 210206, "name": "Tool Accessories"},
            {"id": 210207, "name": "Tool Storage and Organization"}
          ]
        },
        {
          "id": 2103,
          "name": "Home Renovation Services",
          "details": [
            {
              "Service Name": "Complete Kitchen Remodeling",
              "Service Type": "Home Renovation",
              "Description": "Transform your kitchen with our comprehensive remodeling service.",
              "Duration": "4-6 weeks",
              "Service Providers": ["Experienced Contractors", "Interior Designers"],
              "Materials Included": false,
              "Guarantee": true,
              "Price Range": "$10,000 - $50,000",
              "Customer Ratings": 4.9,
              "Number of Reviews": 100,
              "Service Provider": "RenovateRite Builders",
              "Additional Notes": "Enhance functionality and aesthetics with our top-notch kitchen remodeling service. Your dream kitchen starts here."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            {"id": 210301, "name": "General Contractors"},
            {"id": 210302, "name": "Architectural Services"},
            {"id": 210303, "name": "Interior Designers"},
            {"id": 210304, "name": "Home Remodeling"},
            {"id": 210305, "name": "Kitchen and Bathroom Renovations"},
            {"id": 210306, "name": "Roofing and Siding Services"},
            {"id": 210307, "name": "Flooring and Tiling Services"},
            {"id": 210308, "name": "Painting and Decorating Services"},
            {"id": 210309, "name": "Plumbing and Electrical Services"},
            {"id": 210310, "name": "Home Inspections"}
          ]
        },
        {
          "id": 2104,
          "name": "Electrical and Plumbing",
          "details": [
            {
              "Service Name": "Electrical Wiring Installation",
              "Service Type": "Electrical",
              "Description": "Professional electrical wiring installation for homes and businesses.",
              "Duration": "1-2 weeks",
              "Service Providers": ["Licensed Electricians", "Certified Wiring Experts"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$2,000 - $10,000",
              "Customer Ratings": 4.8,
              "Number of Reviews": 120,
              "Service Provider": "PowerUp Electric",
              "Additional Notes": "Ensure safety and efficiency with our expert electrical wiring installation services."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            {"id": 210401, "name": "Electrical Wiring and Fixtures"},
            {"id": 210402, "name": "Plumbing Fixtures and Supplies"},
            {"id": 210403, "name": "Electrical Appliances"},
            {"id": 210404, "name": "Plumbing Tools and Equipment"},
            {"id": 210405, "name": "Electrical and Plumbing Services"}
          ]
        },
        {
          "id": 2105,
          "name": "Heating and Cooling",
          "details": [
            {
              "Service Name": "HVAC System Installation",
              "Service Type": "Heating and Cooling",
              "Description": "Professional installation of heating, ventilation, and air conditioning systems.",
              "Duration": "2-3 days",
              "Service Providers": ["Certified HVAC Technicians", "Energy Efficiency Experts"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$3,000 - $15,000",
              "Customer Ratings": 4.9,
              "Number of Reviews": 150,
              "Service Provider": "ClimateControl Solutions",
              "Additional Notes": "Experience comfort with our state-of-the-art HVAC systems designed for efficiency and performance."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            {"id": 210501, "name": "Heating Systems"},
            {"id": 210502, "name": "Cooling Systems"},
            {"id": 210503, "name": "Thermostats and Controls"},
            {"id": 210504, "name": "Ventilation and Air Quality"},
            {"id": 210505, "name": "Heating and Cooling Services"}
          ]
        },
        {
          "id": 2106,
          "name": "Windows and Doors",
          "details": [
            {
              "Service Name": "Custom Window Installation",
              "Service Type": "Windows and Doors",
              "Description": "Tailored installation of energy-efficient and stylish windows for homes and businesses.",
              "Duration": "1-2 days",
              "Service Providers": ["Experienced Window Installers", "Custom Design Consultants"],
              "Materials Included": true,
              "Guarantee": true,
              "Price Range": "$500 - $5,000",
              "Customer Ratings": 4.8,
              "Number of Reviews": 120,
              "Service Provider": "EliteWindows Solutions",
              "Additional Notes": "Upgrade your living spaces with our premium windows, combining beauty and functionality."
            },
            // Add 24 more services with similar details
          ],
          "subcategories": [
            {"id": 210601, "name": "Window Installation and Repair"},
            {"id": 210602, "name": "Door Installation and Repair"},
            {"id": 210603, "name": "Window Treatments and Blinds"},
            {"id": 210604, "name": "Garage Doors and Openers"},
            {"id": 210605, "name": "Windows and Doors Services"}
          ]
        },
        {
          "id": 2107,
          "name": "Building and Renovation Supplies",
          "details": [
            {
              "Product Name": "Premium Oak Wood Flooring",
              "Brand": "BuildersChoice",
              "Product Type": "Flooring",
              "Material": "Solid Oak Wood",
              "Color Options": ["Natural Oak", "Walnut", "Mahogany"],
              "Size Options": ["2' x 4'", "3' x 5'", "Custom Sizes Available"],
              "Thickness": "0.75 inches",
              "Price per Square Foot": "$4.99",
              "Customer Ratings": 4.7,
              "Number of Reviews": 150,
              "Manufacturer": "BuildersChoice Supplies",
              "Additional Notes": "Enhance your space with the timeless elegance of solid oak wood flooring. Durable and stylish for any renovation project."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            {"id": 210701, "name": "Building Hardware"},
            {"id": 210702, "name": "Adhesives and Sealants"},
            {"id": 210703, "name": "Fasteners and Connectors"},
            {"id": 210704, "name": "Construction Chemicals"},
            {"id": 210705, "name": "Masonry and Concrete Products"}
          ]
        },
        {
          "id": 2108,
          "name": "Home Improvement Tools",
          "details": [
            {
              "Product Name": "Professional Power Drill Kit",
              "Brand": "ToolMaster",
              "Tool Type": "Cordless Power Drill",
              "Voltage": "18V",
              "Battery Type": "Lithium-Ion",
              "Chuck Size": "1/2 inch",
              "Speed Options": ["Low", "Medium", "High"],
              "Accessories Included": ["Drill Bits", "Screwdriver Bits", "Battery", "Charger"],
              "Price": "$89.99",
              "Customer Ratings": 4.8,
              "Number of Reviews": 200,
              "Manufacturer": "ToolMaster Tools",
              "Additional Notes": "Tackle any DIY project with precision and ease using our powerful cordless power drill kit. A must-have for home improvement enthusiasts."
            },
            // Add 24 more products with similar details
          ],
          "subcategories": [
            {"id": 210801, "name": "Handheld Power Tools"},
            {"id": 210802, "name": "Tool Sets and Kits"},
            {"id": 210803, "name": "Painting and Decorating Tools"},
            {"id": 210804, "name": "Plumbing and Electrical Tools"},
            {"id": 210805, "name": "Measuring and Layout Tools"}
          ]
        }
      ]
    }
  ]
}

export {jsonData, details, platforms,languages }
