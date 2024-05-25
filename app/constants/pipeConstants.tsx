export const BROKEN_TYPE = ["Bể nổi", "Bể ngầm"]

export const PIPE_SIZE = [
  20, 25, 27, 32, 40, 50, 80, 90, 100, 125, 150, 180, 200, 225, 250, 300, 315,
];

export const DISTRICT = ["Quận 5", "Quận 6", "Quận 8", "Quận Bình Tân"]


export const MATERIAL = ["uPVC", "HDPE", "Gang"];

export const MANUFACTURER = [
    "Bình Minh",
	"Khôi Việt",
	"Tân Tiến",
	"Lotas",
	"Không rõ",
]

export const BROKEN_SPECIFICATION = Object.freeze({
  TET: "Tét",
  GAY: "Gãy",
  LUNG: "Lủng",
  HU_DAI: "Hư đai",
  XI_MOI_NOI: "Xì mối nối",
  XI_VAN_COC: "Xì van cốc",
  XI_VAN_GOC: "Xì van gốc",
  KHAC: "Khác",
});

export const BROKEN_REASON = Object.freeze({
  [BROKEN_SPECIFICATION.TET]: [
    "Cấn đá",
    "Cấn đà",
    "Chuột cắn",
    "Vật tư cũ bị lão hóa",
    "Đơn vị ngoài làm bể",
  ],
  [BROKEN_SPECIFICATION.GAY]: [
    "Cấn đá",
    "Cấn đà",
    "Cấn cống/hố ga",
    "Cấn rễ cây",
    "Đơn vị ngoài làm bể",
    "Vật tư cũ bị lão hóa",
  ],
  [BROKEN_SPECIFICATION.LUNG]: ["Đơn vị ngoài làm bể", "Chuột cắn"],
  [BROKEN_SPECIFICATION.HU_DAI]: ["Đai xám", "Mục bulon", "Xì đai"],
  [BROKEN_SPECIFICATION.XI_MOI_NOI]: [
    "Cấn đá",
    "Chuột cắn",
    "Mục bulon",
    "Thi công không đúng kỹ thuật",
    "Joint bị lão hóa",
    "Nền đất yếu gây sụt lún",
    "Vật tư cũ bị lão hóa",
    "Đơn vị ngoài làm bể",
  ],
  [BROKEN_SPECIFICATION.XI_VAN_COC]: [
    "Nền đất yếu gây sụt lún",
    "Joint bị lão hóa",
    "Vật tư cũ bị lão hóa",
    "Cấn đá",
    "Đơn vị ngoài làm bể",
  ],
  [BROKEN_SPECIFICATION.XI_VAN_GOC]: [
    "Joint bị lão hóa",
    "Vật tư cũ bị lão hóa",
  ],
});