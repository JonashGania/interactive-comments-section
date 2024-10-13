"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const image_juliusomo_png_1 = __importDefault(require("../assets/avatars/image-juliusomo.png"));
const image_juliusomo_webp_1 = __importDefault(require("../assets/avatars/image-juliusomo.webp"));
const image_amyrobson_png_1 = __importDefault(require("../assets/avatars/image-amyrobson.png"));
const image_amyrobson_webp_1 = __importDefault(require("../assets/avatars/image-amyrobson.webp"));
const image_maxblagun_png_1 = __importDefault(require("../assets/avatars/image-maxblagun.png"));
const image_maxblagun_webp_1 = __importDefault(require("../assets/avatars/image-maxblagun.webp"));
const image_ramsesmiron_png_1 = __importDefault(require("../assets/avatars/image-ramsesmiron.png"));
const image_ramsesmiron_webp_1 = __importDefault(require("../assets/avatars/image-ramsesmiron.webp"));
exports.data = {
    currentUser: {
        image: {
            png: image_juliusomo_png_1.default,
            webp: image_juliusomo_webp_1.default,
        },
        username: "juliusomo",
    },
    comments: [
        {
            id: 1,
            content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            createdAt: "2024-09-10T06:54:16.187Z",
            score: 12,
            user: {
                image: {
                    png: image_amyrobson_png_1.default,
                    webp: image_amyrobson_webp_1.default,
                },
                username: "amyrobson",
            },
            replies: [],
        },
        {
            id: 2,
            content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            createdAt: "2024-09-25T06:54:16.187Z",
            score: 5,
            user: {
                image: {
                    png: image_maxblagun_png_1.default,
                    webp: image_maxblagun_webp_1.default,
                },
                username: "maxblagun",
            },
            replies: [
                {
                    id: "2.1",
                    content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                    createdAt: "2024-10-05T06:54:16.187Z",
                    score: 4,
                    replyingTo: "maxblagun",
                    user: {
                        image: {
                            png: image_ramsesmiron_png_1.default,
                            webp: image_ramsesmiron_webp_1.default,
                        },
                        username: "ramsesmiron",
                    },
                },
                {
                    id: "2.2",
                    content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                    createdAt: "2024-10-10T06:54:16.187Z",
                    score: 2,
                    replyingTo: "ramsesmiron",
                    user: {
                        image: {
                            png: image_juliusomo_png_1.default,
                            webp: image_juliusomo_webp_1.default,
                        },
                        username: "juliusomo",
                    },
                },
            ],
        },
    ],
};
