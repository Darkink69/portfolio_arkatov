// HireModal.tsx
import React, { useEffect } from "react";

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HireModal: React.FC<HireModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full bg-linear-to-br from-gray-900 to-black rounded-2xl border border-white/20 shadow-2xl p-6 razer"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>
        <h3 className="text-2xl text-white mb-4 text-center razerBold">
          Связаться со мной
        </h3>
        <p className="text-gray-300 text-base leading-relaxed mb-6 text-center">
          Интересуюсь постоянной и частичной занятостью с официальным
          трудоустройством. <br></br>Готов рассмотреть разовые заказы.
          Зарегистрирован как самозанятый.<br></br>
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700">
            <span className="text-2xl">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 32C11.7264 32 7.70837 30.3354 4.68647 27.3135C1.66457 24.2916 0 20.2736 0 16C0 11.7264 1.66457 7.70837 4.68647 4.68647C7.70837 1.66457 11.7264 0 16 0C20.2736 0 24.2916 1.66457 27.3135 4.68647C30.3354 7.70837 32 11.7264 32 16C32 20.2736 30.336 24.2916 27.3135 27.3135C24.2916 30.3354 20.2736 32 16 32ZM16 1.9724C12.2532 1.9724 8.73027 3.43174 6.08101 6.08101C3.43174 8.73027 1.9724 12.2532 1.9724 16C1.9724 19.7468 3.43174 23.2697 6.08101 25.919C8.73027 28.5683 12.2532 30.0276 16 30.0276C19.7468 30.0276 23.2697 28.5683 25.919 25.919C28.5683 23.2697 30.0276 19.7468 30.0276 16C30.0276 12.2532 28.5683 8.73027 25.919 6.08101C23.2697 3.43174 19.7468 1.9724 16 1.9724Z"
                  fill="url(#paint0_linear_4494_28)"
                />
                <path
                  d="M22.6593 18.3863V21.1784C22.6593 22.639 21.4814 23.8355 20.0208 23.8385C20.0118 23.8385 20.0022 23.8385 19.9932 23.8385C18.9821 23.8385 17.9998 23.7119 17.0625 23.4725C12.8825 22.4074 9.59179 19.1166 8.52668 14.9366C8.28786 13.9993 8.16064 13.0176 8.16064 12.0059C8.16064 11.9969 8.16064 11.9873 8.16064 11.9783C8.16424 10.5178 9.36016 9.33984 10.8207 9.33984H13.6128C14.3005 9.33984 14.8585 9.8973 14.8585 10.5856V13.6909C14.8585 14.3785 14.3011 14.9366 13.6128 14.9366H12.6743C13.4736 16.9318 15.0661 18.5244 17.0613 19.3236V18.3851C17.0613 17.6975 17.6188 17.1394 18.3071 17.1394H21.4124C22.1 17.1394 22.6581 17.6969 22.6581 18.3851L22.6593 18.3863Z"
                  fill="url(#paint1_linear_4494_28)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4494_28"
                    x1="1.5"
                    y1="4"
                    x2="30"
                    y2="31"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#34ACE1" />
                    <stop offset="1" stopColor="#1C5E7B" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_4494_28"
                    x1="8.84027"
                    y1="11.1522"
                    x2="21.7531"
                    y2="23.3854"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#34ACE1" />
                    <stop offset="1" stopColor="#1C5E7B" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <a href="tel:+79059332649">
              <span className="text-white ">+7 (905) 933-26-49</span>
            </a>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700">
            <span className="text-2xl">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                  fill="url(#paint0_linear_4492_13)"
                />
                <path
                  d="M10.8306 17.1695L12.7288 22.4236C12.7288 22.4236 12.9662 22.9152 13.2203 22.9152C13.4744 22.9152 17.2543 18.9829 17.2543 18.9829L21.4576 10.8643L10.8983 15.8132L10.8306 17.1695Z"
                  fill="#C8DAEA"
                />
                <path
                  d="M13.3473 18.5171L12.9829 22.3899C12.9829 22.3899 12.8304 23.5766 14.0168 22.3899C15.2032 21.2032 16.3388 20.2882 16.3388 20.2882"
                  fill="#A9C6D8"
                />
                <path
                  d="M10.8648 17.3569L6.95998 16.0846C6.95998 16.0846 6.49332 15.8953 6.64358 15.466C6.67452 15.3774 6.73691 15.3021 6.92358 15.1726C7.78878 14.5696 22.9377 9.12463 22.9377 9.12463C22.9377 9.12463 23.3654 8.98049 23.6177 9.07636C23.6801 9.09568 23.7363 9.13123 23.7804 9.17937C23.8246 9.22751 23.8552 9.28652 23.869 9.35036C23.8963 9.46311 23.9077 9.57912 23.9029 9.69503C23.9017 9.79529 23.8896 9.88823 23.8804 10.034C23.7881 11.5226 21.027 22.633 21.027 22.633C21.027 22.633 20.8618 23.2832 20.27 23.3054C20.1245 23.3101 19.9796 23.2855 19.8439 23.233C19.7082 23.1805 19.5844 23.1012 19.48 22.9998C18.3185 22.0008 14.3041 19.3029 13.417 18.7096C13.397 18.6959 13.3802 18.6782 13.3676 18.6575C13.3551 18.6368 13.3471 18.6136 13.3442 18.5896C13.3318 18.527 13.3998 18.4496 13.3998 18.4496C13.3998 18.4496 20.39 12.2362 20.576 11.584C20.5904 11.5334 20.536 11.5085 20.4629 11.5306C19.9986 11.7014 11.9504 16.784 11.0621 17.3449C10.9982 17.3642 10.9306 17.3683 10.8648 17.3569Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4492_13"
                    x1="16"
                    y1="32"
                    x2="16"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1D93D2" />
                    <stop offset="1" stopColor="#38B0E3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <a
              href="http://t.me/DarkInk2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white">@DarkInk2000</span>
            </a>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700">
            <span className="text-2xl">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.0102 0H7.98979C3.57715 0 0 3.57715 0 7.98979V24.0102C0 28.4228 3.57715 32 7.98979 32H24.0102C28.4228 32 32 28.4228 32 24.0102V7.98979C32 3.57715 28.4228 0 24.0102 0Z"
                  fill="url(#paint0_linear_4478_26)"
                />
                <path
                  d="M24.0102 0H7.98979C3.57715 0 0 3.57715 0 7.98979V24.0102C0 28.4228 3.57715 32 7.98979 32H24.0102C28.4228 32 32 28.4228 32 24.0102V7.98979C32 3.57715 28.4228 0 24.0102 0Z"
                  fill="url(#paint1_radial_4478_26)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2626 28.1067C13.8624 28.1067 12.747 27.7563 10.8081 26.3547C9.58175 27.9315 5.6982 29.1638 5.52882 27.0555C5.52882 25.4729 5.17842 24.1356 4.7813 22.6756C4.30828 20.8769 3.771 18.8738 3.771 15.9713C3.771 9.03929 9.45912 3.82422 16.1984 3.82422C22.9435 3.82422 28.2287 9.29625 28.2287 16.0355C28.2513 22.6706 22.8977 28.0713 16.2626 28.1067ZM16.3619 9.81599C13.0799 9.64665 10.522 11.9184 9.95551 15.4808C9.48831 18.4299 10.3176 22.0215 11.0242 22.2084C11.3629 22.2901 12.2156 21.601 12.747 21.0696C13.6258 21.6767 14.6491 22.0413 15.7137 22.1266C19.1145 22.2902 22.0203 19.7012 22.2486 16.3042C22.3815 12.9 19.7632 10.0167 16.3619 9.82185V9.81599Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4478_26"
                    x1="3.7711"
                    y1="24.3372"
                    x2="32"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#44CCFF" />
                    <stop offset="0.662" stopColor="#5533EE" />
                    <stop offset="1" stopColor="#9933DD" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_4478_26"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-0.761305 -14.0539) rotate(51.356) scale(38.8325 16)"
                  >
                    <stop stopColor="#0000FF" />
                    <stop offset="1" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </span>
            <a
              href="https://max.ru/u/f9LHodD0cOJPO8_FnOkSA15qWiMkzqJ99trxgfuVCldp974VTzmlm_9SouY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white">max.ru</span>
            </a>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700">
            <span className="text-2xl">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 32C11.7264 32 7.70837 30.3354 4.68647 27.3135C1.66397 24.2916 0 20.2736 0 16C0 11.7264 1.66397 7.70837 4.68647 4.68647C7.70837 1.66457 11.7264 0 16 0C20.2736 0 24.2916 1.66457 27.3135 4.68647C30.3354 7.70837 32 11.7264 32 16C32 20.2736 30.336 24.2916 27.3135 27.3135C24.2916 30.3354 20.2736 32 16 32ZM16 1.9724C12.2532 1.9724 8.73027 3.43174 6.08101 6.08101C3.43174 8.73027 1.9724 12.2532 1.9724 16C1.9724 19.7468 3.43174 23.2697 6.08101 25.919C8.73027 28.5683 12.2532 30.0276 16 30.0276C19.7468 30.0276 23.2697 28.5683 25.919 25.919C28.5683 23.2697 30.0276 19.7468 30.0276 16C30.0276 12.2532 28.5683 8.73027 25.919 6.08101C23.2697 3.43174 19.7468 1.9724 16 1.9724Z"
                  fill="url(#paint0_linear_4494_22)"
                />
                <path
                  d="M24.0106 21.3255C22.7877 20.1908 20.3358 17.9616 18.1132 16.2166C17.9722 16.1056 17.9716 15.8926 18.1132 15.7822C20.3418 14.0318 22.7895 11.8068 24.0112 10.6745C24.1792 10.5184 24.4528 10.6229 24.4744 10.8509C24.7217 13.4563 24.7217 18.5437 24.4744 21.1491C24.4528 21.3771 24.1792 21.4815 24.0112 21.3255H24.0106ZM23.6428 10.261C22.124 11.67 18.6731 14.8011 16.1582 16.5491C16.0634 16.6151 15.9374 16.6151 15.8426 16.5491C13.3271 14.8005 9.87679 11.67 8.35803 10.261C8.18762 10.1032 8.27643 9.81758 8.50625 9.78458C10.0478 9.56195 12.8159 9.42334 16.001 9.42334C19.1861 9.42334 21.9542 9.56195 23.4957 9.78458C23.7256 9.81758 23.8144 10.1032 23.644 10.261H23.6428ZM7.52575 21.1491C7.27853 18.5437 7.27853 13.4563 7.52575 10.8509C7.54735 10.6229 7.82098 10.5184 7.989 10.6745C9.21012 11.8074 11.6578 14.0318 13.887 15.7828C14.028 15.8938 14.028 16.1068 13.887 16.2172C11.6644 17.9622 9.21252 20.1914 7.9896 21.3261C7.82158 21.4821 7.54795 21.3777 7.52635 21.1497L7.52575 21.1491ZM8.35683 21.739C9.61096 20.5749 12.184 18.2358 14.454 16.4758C14.5525 16.3996 14.6893 16.3978 14.7889 16.4722C15.1561 16.7447 15.5107 16.9973 15.8462 17.2217C15.9392 17.2841 16.0604 17.2841 16.154 17.2217C16.4894 16.9973 16.8441 16.7447 17.2113 16.4722C17.3109 16.3984 17.4477 16.3996 17.5462 16.4758C19.8162 18.2358 22.3886 20.5749 23.6434 21.739C23.8138 21.8968 23.725 22.1824 23.4951 22.2154C21.9536 22.438 19.1855 22.5767 16.0004 22.5767C12.8153 22.5767 10.0472 22.438 8.50565 22.2154C8.27583 22.1824 8.18702 21.8974 8.35743 21.739H8.35683Z"
                  fill="url(#paint1_linear_4494_22)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4494_22"
                    x1="1"
                    y1="5"
                    x2="32.5"
                    y2="38.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3066C1" />
                    <stop offset="1" stopColor="#ED5BED" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_4494_22"
                    x1="7.88157"
                    y1="11.4785"
                    x2="20.1517"
                    y2="28.661"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3066C1" />
                    <stop offset="1" stopColor="#ED5BED" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <a href="mailto:abc.chch@gmail.com">
              <span className="text-white">abc.chch@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireModal;
