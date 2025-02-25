export default {
  async fetch(request) {
	const clientIp = request.headers.get('CF-Connecting-IP') || 'Unknown IP';

	const countryNames = {
		  AF: "Afghanistan",
		  AL: "Albania",
		  DZ: "Algeria",
		  AS: "American Samoa",
		  AD: "Andorra",
		  AO: "Angola",
		  AI: "Anguilla",
		  AQ: "Antarctica",
		  AG: "Antigua and Barbuda",
		  AR: "Argentina",
		  AM: "Armenia",
		  AW: "Aruba",
		  AU: "Australia",
		  AT: "Austria",
		  AZ: "Azerbaijan",
		  BS: "Bahamas",
		  BH: "Bahrain",
		  BD: "Bangladesh",
		  BB: "Barbados",
		  BY: "Belarus",
		  BE: "Belgium",
		  BZ: "Belize",
		  BJ: "Benin",
		  BM: "Bermuda",
		  BT: "Bhutan",
		  BO: "Bolivia",
		  BA: "Bosnia and Herzegovina",
		  BW: "Botswana",
		  BR: "Brazil",
		  IO: "British Indian Ocean Territory",
		  BN: "Brunei Darussalam",
		  BG: "Bulgaria",
		  BF: "Burkina Faso",
		  BI: "Burundi",
		  CV: "Cabo Verde",
		  KH: "Cambodia",
		  CM: "Cameroon",
		  CA: "Canada",
		  KY: "Cayman Islands",
		  CF: "Central African Republic",
		  TD: "Chad",
		  CL: "Chile",
		  CN: "China",
		  CO: "Colombia",
		  KM: "Comoros",
		  CG: "Congo",
		  CD: "Congo, Democratic Republic of the",
		  CR: "Costa Rica",
		  CI: "Côte d'Ivoire",
		  HR: "Croatia",
		  CU: "Cuba",
		  CY: "Cyprus",
		  CZ: "Czechia",
		  DK: "Denmark",
		  DJ: "Djibouti",
		  DM: "Dominica",
		  DO: "Dominican Republic",
		  EC: "Ecuador",
		  EG: "Egypt",
		  SV: "El Salvador",
		  GQ: "Equatorial Guinea",
		  ER: "Eritrea",
		  EE: "Estonia",
		  SZ: "Eswatini",
		  ET: "Ethiopia",
		  FJ: "Fiji",
		  FI: "Finland",
		  FR: "France",
		  GA: "Gabon",
		  GM: "Gambia",
		  GE: "Georgia",
		  DE: "Germany",
		  GH: "Ghana",
		  GR: "Greece",
		  GD: "Grenada",
		  GU: "Guam",
		  GT: "Guatemala",
		  GN: "Guinea",
		  GW: "Guinea-Bissau",
		  GY: "Guyana",
		  HT: "Haiti",
		  HN: "Honduras",
		  HK: "Hong Kong",
		  HU: "Hungary",
		  IS: "Iceland",
		  IN: "India",
		  ID: "Indonesia",
		  IR: "Iran",
		  IQ: "Iraq",
		  IE: "Ireland",
		  IL: "Israel",
		  IT: "Italy",
		  JM: "Jamaica",
		  JP: "Japan",
		  JO: "Jordan",
		  KZ: "Kazakhstan",
		  KE: "Kenya",
		  KI: "Kiribati",
		  KP: "Korea, North",
		  KR: "Korea, South",
		  KW: "Kuwait",
		  KG: "Kyrgyzstan",
		  LA: "Laos",
		  LV: "Latvia",
		  LB: "Lebanon",
		  LS: "Lesotho",
		  LR: "Liberia",
		  LY: "Libya",
		  LI: "Liechtenstein",
		  LT: "Lithuania",
		  LU: "Luxembourg",
		  MO: "Macao",
		  MG: "Madagascar",
		  MW: "Malawi",
		  MY: "Malaysia",
		  MV: "Maldives",
		  ML: "Mali",
		  MT: "Malta",
		  MH: "Marshall Islands",
		  MR: "Mauritania",
		  MU: "Mauritius",
		  MX: "Mexico",
		  FM: "Micronesia",
		  MD: "Moldova",
		  MC: "Monaco",
		  MN: "Mongolia",
		  ME: "Montenegro",
		  MA: "Morocco",
		  MZ: "Mozambique",
		  MM: "Myanmar",
		  NA: "Namibia",
		  NR: "Nauru",
		  NP: "Nepal",
		  NL: "Netherlands",
		  NZ: "New Zealand",
		  NI: "Nicaragua",
		  NE: "Niger",
		  NG: "Nigeria",
		  NO: "Norway",
		  OM: "Oman",
		  PK: "Pakistan",
		  PW: "Palau",
		  PA: "Panama",
		  PG: "Papua New Guinea",
		  PY: "Paraguay",
		  PE: "Peru",
		  PH: "Philippines",
		  PL: "Poland",
		  PT: "Portugal",
		  PR: "Puerto Rico",
		  QA: "Qatar",
		  RO: "Romania",
		  RU: "Russia",
		  RW: "Rwanda",
		  WS: "Samoa",
		  SA: "Saudi Arabia",
		  SN: "Senegal",
		  RS: "Serbia",
		  SC: "Seychelles",
		  SG: "Singapore",
		  SK: "Slovakia",
		  SI: "Slovenia",
		  SB: "Solomon Islands",
		  SO: "Somalia",
		  ZA: "South Africa",
		  ES: "Spain",
		  LK: "Sri Lanka",
		  SD: "Sudan",
		  SE: "Sweden",
		  CH: "Switzerland",
		  SY: "Syria",
		  TW: "Taiwan",
		  TJ: "Tajikistan",
		  TZ: "Tanzania",
		  TH: "Thailand",
		  TL: "Timor-Leste",
		  TG: "Togo",
		  TO: "Tonga",
		  TT: "Trinidad and Tobago",
		  TN: "Tunisia",
		  TR: "Turkey",
		  TM: "Turkmenistan",
		  TV: "Tuvalu",
		  UG: "Uganda",
		  UA: "Ukraine",
		  AE: "United Arab Emirates",
		  GB: "United Kingdom",
		  US: "United States",
		  UY: "Uruguay",
		  UZ: "Uzbekistan",
		  VU: "Vanuatu",
		  VE: "Venezuela",
		  VN: "Vietnam",
		  YE: "Yemen",
		  ZM: "Zambia",
		  ZW: "Zimbabwe",
		};

	const countryCode = request.cf.country;
	const countryName = countryNames[countryCode] || 'Unknown Country';

	const data = {
		ip: clientIp,
		message: "success",
		country: {
			code: countryCode,
			name: countryName,
		},
		cf: request.cf,
	};
	return Response.json(data);
  },
};
