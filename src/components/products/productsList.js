import stone001 from "../../assets/images/products/stone/stone (1).png"
import stone002 from "../../assets/images/products/stone/stone (2).png"
import stone003 from "../../assets/images/products/stone/stone (3).png"
import stone004 from "../../assets/images/products/stone/stone (4).png"
import construction001 from "../../assets/images/products/construction/construction (1).png"
import construction002 from "../../assets/images/products/construction/construction (2).png"
import construction003 from "../../assets/images/products/construction/construction (3).png"
import construction004 from "../../assets/images/products/construction/construction (4).png"
import floorprep001 from "../../assets/images/products/floorprep/floorprep (1).png"
import floorprep002 from "../../assets/images/products/floorprep/floorprep (2).png"
import coredrill001 from "../../assets/images/products/coredrill/coredrill (1).png"
import coredrill002 from "../../assets/images/products/coredrill/coredrill (2).png"
// import coredrill003 from "../../assets/images/products/coredrill/coredrill (3).png"

import machine001 from "../../assets/images/products/machine/machine (1).png"
import machine003 from "../../assets/images/products/machine/machine (3).png"

const stoneList = [
   {
      id: 1,
      name: "STONE TURBO CUP WHEEL",
      image: stone001,
      type:[
         "Stone",
      ],
      table:"",
   },
   {
      id: 2,
      name: "DRY CORE DRILL",
      image: stone002,
      type:[
         "Stone",
      ],
      table:"",
   },
   {
      id: 3,
      name: "DRY CORE DRILL WITH SIDE PROTECTION",
      image: "",
      type:[
         "Stone",
      ],
      table:"",
   },
   {
      id: 4,
      name: "DRY Turbo SHAPE CORE DRILL WITH SIDE PROTECTION",
      image: stone003,
      type:[
         "Stone",
      ],
      table:"",
   },
   {
      id: 5,
      name: "DRY Turbo SHAPE",
      image: stone003,
      type:[
         "Stone",
      ],
      table:"",
   },
   {
      id: 6,
      name: "DRY T SHAPE CORE DRILL WITH SIDE PROTECTION",
      image: stone004,
      type:[
         "Stone",
      ],
      table:"",
   },
];
const constructionList = [
   {
      id: 1001,
      name: "LASER TURBO SEGMENTED BLADES FOR CONCRETE",
      image: construction001,
      type:[
         "Construction",
      ],
      table:"",
   },
   {
      id: 1002,
      name: "LASER SEGMENTED BLADES FOR CONCRETE",
      image: construction002,
      type:[
         "Construction",
      ],
      table:"",
   },
   {
      id: 1003,
      name: "SINTERED SEGMENTED BLADES FOR GRNERAL PURPOSE",
      image: construction003,
      type:[
         "Construction",
      ],
      table:"",
   },
   {
      id: 1004,
      name: "ASPHALT & GREEN CONCRETE BLADES - LOW HP SAW - LASER",
      image: construction004,
      type:[
         "Construction",
      ],
      table:"",
   },
];
const floorprepList = [
   {
      id: 2001,
      name: '3" Wet Dry Resin PAD',
      image: floorprep001,
      type:[
         "Floor Prep",
      ],
      table:"",
   },
   {
      id: 2002,
      name: '3" 3STEP Wet Dry Resin PAD',
      image: floorprep002,
      type:[
         "Floor Prep",
      ],
      table:"",
   },
];
const coredrillList = [
   {
      id: 3001,
      name: "PROFESSIONAL - Brazing ( M segment)",
      image: coredrill001,
      type:[
         "Core Drill",
      ],
      table:"",
   },
   {
      id: 3002,
      name: `PROFESSIONAL - Brazing (M core drillx 18" Length)`,
      image: coredrill002,
      type:[
         "Core Drill",
      ],
      table:"",
   },
   {
      id: 3003,
      name: `PROFESSIONAL - Brazing (X- Dry core drill x 14.5" Length)`,
      image: "",
      type:[
         "Core Drill",
      ],
      table:"",
   },
   {
      id: 3004,
      name: `PROFESSIONAL - Brazing ( V segment)`,
      image: "",
      type:[
         "Core Drill",
      ],
      table:"",
   },
];
const machineList= [
   {
      id: 4001,
      name: "Core Drill Machine Set 110V",
      image: machine001,
      type:[
         "Machine",
      ],
      table:"",
   },
   {
      id: 4002,
      name: "Floor Grinding & Vacuum",
      image: machine003,
      type:[
         "Machine",
      ],
      table:"",
   },
];

const productsList = stoneList.concat(constructionList, floorprepList, coredrillList, machineList)

export {productsList};