export const aspectRatioData = {
    "ap_16_9": {
        ratios: [16 / 9],
        title: "16x9",
        resolutions: [
            {2160: "w_3840,h_2160"},
            {1440: "w_2560,h_1440"},
            {1080:"w_1920,h_1080"},
            {900: "w_1600,h_900"},
            {768: "w_1366,h_768"},
            {720:"w_1280,h_720"},
            {450:"w_800,h_450"}
        ],
    },
    "ap_16_10": {
        ratios: [16 / 10],
        title: "16x10",
        resolutions: [
            {1600: "w_2560,h_1600"},
            {1080: "w_1920,h_1200"}
        ]
    },
    "ap_21_9": {
        ratios: [21 / 9, 2.37037, 2.38889, 2.4], // 2560×1080, 3440×1440, 5120×2160 all of them give different divison value
        title: "21x9",
        resolutions: [
            {2880:"w_6880,h_2880"},
            {2160: "w_5120,h_2160"},
            {1440: "w_3440,h_1440"},
            {1080:"w_2560,h_1080"},
        ]
    },
    "ap_32_9": {
        ratios: [32 / 9],
        title: "32x9",
        resolutions: [
            {2160: "w_7680,h_2160"},
            {1440:  "w_5120,h_1440"},
            {1080:"w_3840,h_1080"}
        ]
    },
    "ap_4_3": {
        ratios: [4 / 3],
        title: "4x3",
        resolutions: [
            {1200: "w_1600,h_1200"},
            {768:"w_1024,h_768"}
        ]
    },
    "ap_5_4": {
        ratios: [5 / 4],
        title: "5x4",
        resolutions: [
            {5120:"w_5120,h_4096"},
            {3840: "w_3840,h_3072"},
            {3750: "w_3750,h_3000"},
            {2560: "w_2560,h_2048"},
            {1920: "w_1920,h_1536"},
            {1024: "w_1280,h_1024"}
        ]
    },
};

// more resolution available here
// https://wallpaperswide.com/cute_kitten_close_up-wallpapers.html

