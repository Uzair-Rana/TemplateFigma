// // src/Components/Subcomponents/TestimonialCard.jsx
// import React from "react";
//
// // The TestimonialCard will take props like testimonial, clientName, avatarUrl, and alignment for positioning.
// const TestimonialCard = ({ testimonial, clientName, avatarUrl, position }) => {
//     return (
//         <div className={`w-[470px] h-60 absolute ${position} transition duration-300 ease-in-out`}>
//             {/* Background (Opacity, Border, Rounded Corners) */}
//             <div className="w-[470px] h-60 left-0 top-0 absolute opacity-10 rounded-[10px] border-2 border-white" />
//
//             {/* Testimonial Text */}
//             <div className="w-80 left-[135px] top-[35px] absolute justify-start text-white text-lg font-medium font-['DM_Sans'] leading-7">
//                 {testimonial}
//             </div>
//
//             {/* Client Name */}
//             <div className="left-[135px] top-[188px] absolute opacity-30 justify-start text-white text-sm font-bold font-['DM_Sans'] uppercase leading-6 tracking-widest">
//                 {clientName}
//             </div>
//
//             {/* Client Avatar */}
//             <img
//                 className="w-16 h-16 left-[35px] top-[36px] absolute rounded-[10px]"
//                 src={avatarUrl}
//                 alt={clientName}
//             />
//         </div>
//     );
// };
//
// export default TestimonialCard;
