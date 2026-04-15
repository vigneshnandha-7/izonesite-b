import AnimatedSocialShare from "./AnimatedSocialShare";

const CEOCard = ({ 
  name = "Makhaira Antione", 
  role = "CEO & FOUNDER", 
  description, 
  image = "https://www.izonetech.in/img/kesavan.jpg" 
}) => {
  return (
    <div className="w-full flex items-center justify-center py-12 px-4 md:px-8 relative z-10">
      
      <div className="w-full max-w-5xl bg-white flex flex-col md:flex-row overflow-hidden shadow-sm border border-[#00c6ff]/10">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-[35%] flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full min-h-[300px] md:min-h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-[60%] p-6 md:p-10 flex flex-col justify-center bg-white text-black space-y-6">
          
          {/* NAME */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-2 tracking-tight">
              {name}
            </h1>
            <p className="text-[#FF5722] text-xs font-bold uppercase tracking-wider mt-2">
              {role}
            </p>
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-4">
            <p className="text-black text-xs leading-relaxed font-medium">
              {description || "These roles may overlap or be combined in smaller organizations, and team structures can adapt to the specific needs of the business. Additionally, with the rise of cloud computing, AI, and other technologies, new roles are constantly emerging in the IT field."}
            </p>

            <p className="text-black text-xs leading-relaxed font-medium">
              These roles may overlap or be combined in smaller organizations, and team structures can adapt to the specific needs of the business. Additionally,
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-3 pt-1">
            <span className="text-xs font-bold text-black">Social Share:</span>
            <AnimatedSocialShare />
          </div>

          {/* CONTACT BOX */}
          <div className="border border-[#0072ff] p-5 mt-2">
            <h3 className="font-bold text-base text-black mb-4">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 text-xs divide-y md:divide-y-0 md:divide-x divide-[#00c6ff]/30">
              <div className="py-2 md:py-0 md:pr-4">
                <p className="text-black mb-1 font-medium">You can mail me</p>
                <p className="font-bold text-black">makharia@tech.com</p>
              </div>

              <div className="py-2 md:py-0 md:px-4">
                <p className="text-black mb-1 font-medium">You can Call me</p>
                <p className="font-bold text-black">+098765456789</p>
              </div>

              <div className="py-2 md:py-0 md:pl-4">
                <p className="text-black mb-1 font-medium">You can mail me</p>
                <p className="font-bold text-black">makharia@tech.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CEOCard;
