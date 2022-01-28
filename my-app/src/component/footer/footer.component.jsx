import React from "react";

const FooterLg=()=>{
  return(
    <>
  <footer className="w-full bg-gray-700 py-8 sm:py-19">
    <div className="flex items-center justify-center">
      <div className="block">
      <div>
       <h5 className="text-3xl font-bold text-yellow-500 mb-6"><u className="weight-500">Follow us on</u></h5>
       </div>
       <div>
          <ul className="list-none footer-links flex gap-5">
          <li className="mb-2 w-12 h-auto">
          <a href="https://www.facebook.com/groups/ecasnist" target="_blank">
<img src="data:image/png;base64,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" alt="" 
className="w-full h-full rounded-3xl"
/></a>
          </li>
          <li className="mb-2 w-10 h-auto">
            <a href="https://www.instagram.com/ecasnist/" target="_blank"><img src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg" alt="" 
            className="w-full h-full rounded-3xl"
            /></a>
          </li>
          <li className="mb-2 w-10 h-full">
            <a href="https://www.linkedin.com/company/eca-snist/about/" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""
            className="rounded-3xl"
            />
            </a>
          </li>
        </ul>
       </div>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <div className="block">
      <h3 className="text-pink-400 font-bold text-xl"><u>For Details:</u></h3>
      <div className="flex">
      <p className="text-white block font-bold text-lg">8019045490,</p>
      <p className="block text-white font-bold text-lg">9494071515</p>
      </div>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <p className="text-lg font-bold flex text-yellow-500"><span className="text-white">&#169;</span> The ECA club - SNIST,<p className="text-lg pl-3 text-white">All Right Reserved.</p></p>
    </div>
</footer>
    </>
  );
}

const Footermd=()=>{
  return(
    
  
    <footer className="w-full bg-gray-700 py-8 sm:py-19">
    <div className="flex items-center justify-center">
      <div className="block">
      <div>
       <h5 className="text-3xl font-bold text-yellow-500 mb-6"><u className="weight-500">Follow us on</u></h5>
       </div>
       <div>
          <ul className="list-none footer-links flex gap-5">
          <li className="mb-2 w-12 h-auto">
          <a href="https://www.facebook.com/groups/ecasnist" target="_blank">
            <img src="data:image/png;base64,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" alt="" 
              className="w-full h-full rounded-3xl"/>
          </a>
          </li>
          <li className="mb-2 w-10 h-auto">
            <a href="https://www.instagram.com/ecasnist/" target="_blank"><img src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg" alt="" 
            className="w-full h-full rounded-3xl"
            /></a>
          </li>
          <li className="mb-2 w-10 h-full">
            <a href="https://www.linkedin.com/company/eca-snist/about/" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""
            className="rounded-3xl"
            />
            </a>
          </li>
        </ul>
       </div>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <div className="block">
      <h3 className="text-pink-400 font-bold text-xl"><u>For Details:</u></h3>
      <div className="flex">
      <p className="text-white block font-bold text-lg">8019045490,</p>
      <p className="block text-white font-bold text-lg">9494071515</p>
      </div>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <p className="text-lg font-bold flex text-yellow-500"><span className="text-white">&#169;</span> The ECA club - SNIST,<p className="text-lg pl-3 text-white">All Right Reserved.</p></p>
    </div>
</footer>
  );
}

const FooterSm=()=>{
  return(
    <>
  
  <footer className="w-full bg-gray-700 py-8 sm:py-19">
    <div className="flex items-center justify-center">
      <div className="block">
      <div>
       <h5 className="text-3xl font-bold text-yellow-500 mb-6"><u className="weight-500">Follow us on</u></h5>
       </div>
       <div>
          <ul className="list-none footer-links flex gap-5">
          <li className="mb-2 w-12 h-auto">
          <a href="https://www.facebook.com/groups/ecasnist" target="_blank">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAflBMVEX///8AAABbW1tgYGDu7u6UlJShoaHFxcWRkZHo6Ojf398QEBD8/PzS0tL4+Pja2tpSUlJKSkp4eHiKioqlpaWdnZ0/Pz+2trby8vIaGhpra2tQUFA3NzeFhYXMzMwjIyPAwMB/f38tLS1xcXGvr6+5ubk6OjocHBwnJydoaGgihJnuAAAHKElEQVR4nO2diXbiMAxFG5YCYd+hLIUC0/L/PzhAWgYKCVqe5XDG9wPq3kMS25Isv7wEAoFAIBAIBAKBQCAQCPy/tEpxc1n5Ztlslya+/yMQjXg17HU+o3uM9tVt84lFG+3B5v2u2TWd6qrk+3/l0yx3CW5npr3dE0lOxkWO3A/zctv3f06hte1I7BLq/bw7VvZyu4SvYX4/O5Oy1i6huPRtcpf4DaN35H3r2+aG5gynd+LVt9EVTdacQGTo2+pMrPhuZjLwbXZisnGkd2Ba8W338vLqTu/IrOZXr/nl1u9A1adfz7negWnTl17TQu/I2o/fwsovij5je73ah51f5GHe35nqHeg0TP3W1n4HDB/ThouV2WN2Vn61uhc/synRbHa45c3Cb+XPL4q67v22Pv2iaN5y7Df063fY7Ls19O4XRXWXhjnwOxi6C7sNfLslOHtKx77Nfvhw41fx7fUPJ7NF7Nvqkj3ebwL9B6fdt16//Hqi3O/3euvNZrNm7MD6cEHY9q84XKZlyjiJjTHYT51UOTHNzpCxsm7Y3RNkApw9Sqrw0orIHXAboPfxODjGE5zh/BoAP8pXgZkYLsMEAbkHUgyem/lGpYMBOyRa7JYrWMf4lfR+K9pI7NqFDURwpPajzsr84gxEslu/hXinDiWoPtH7AZZo5CSfQHChFhTV9FwxdzqWdkGzVPsxVo0SwZFSEJDgpC+pRE+LbtUNCFIU6aPJXgeNH2KNxiiVkAlqyk0QtVmM9ZTwgybfVrQAfhEjBCYUlO/u+wA/znpROiVJw4iIN5AxC8oFpWk1SHUkZ1sqXlQI30KEHyvAJw78yEoUMImyjB1Nuzc65orrZ+SjiAQpRwIe00v9+8hM8UrgBxo/XbCAGeCEJJaPiYRmCGL+/jf8okTIJB9lbNhQAyTwJ3tULjBVEBDquYQtOAcNbCXIjc7UUAOnRmfBgtwAG+iMh50g9xmFZcvMBHn167An1E4wfT66B66ewkyQ94zijnrYCXJSMZCdYELqXg0uyInNAKKhP1jNg7z1KCJW8Y2dIOcl1CeUzqSeecAL0g+QaF/BRfVMP7XQujV8/cVAeZCGvq/XbgWl5YDKGAI9hq6dBaVH4rXrQ/JA2hOBUkHtWS/yuNqUklRQm4ukbpnU07xUUHvehJrnURdOSgW141LX2+rKV1+C1LWM+liuUFBf70AcaO1JUL8JJeYo1IUVQkF9qJkYHVWHK4SC+lNRxHlCPY5QUJ/toZ0w1O92hYL6SB5tItR/zISC+mPdtFSv/mMmFNRXjdEq1/QF2kJB/clg2lJG/7UWCuqPBtN2hPozSkJB9bhRIdeCgIQhbTHqSxAQhbISbE8otUfV8jXr5xFM+BoV971+egMx0DCX2AomdCwF0we7BBi3j7I+bNBhHg12CbaVg6kgrRUE9iyrqSCtNxI2aWAqSKuWwVbomAoSU4TQMU0FiUcMoGOaCq5ogtCGRqaCxDQ9sBOqsSBxEQyrcjpiKkjzwzb9sRSkNvGALmUsBakpXmjbCktB8vkJ5KCWguTOcsievZaC5NOgVeCgloJUP2hvOENB+jEpXLWoqSDjRDZwVENBRvdK4GLNUJARrQSuZewEOUcxgS+hnSCraHsKG9ZOkNVAFtdi2k6QdZIXFxs1E2SesIONaybIvLsBNlGYCTJPEMISFFaCf3h+uOGtBNm3i6BuWrASZNeJI5rhHTESpCXOrgDdBWIkuOILgg6gGQny/VAHtGwERW0O15ChbQRFR1EwWwoTQWGTf0gvBhNBYXM1yExhISiYIxIQN9JZCIovZkL8hAaCirbigBC3gaCiUSygosS9IK36JwX9ttC9oOp+O30mzbmg8mI0dTrbuaC2n7g2gOhaUH3fqza+5liQHam4RfmdcSwIaOmvLF1zKwi5LEyXDnUqCLr8RfWQOhVE3TmRV0HYtZKaRbdDQfEu6RbFsWWHgsgrQ+Sbe3eCqNsmEj5zJwi+CVwcgXIliLlq4gLpks2RoLbF/R2Eke5ZLf6m9kMcNyvjgapv1NTFrbzATlZqpN0ystH20cHh6s5h/TFpDO7ub0f2HZbj8n56ZKmsFF6fTS7+f0OXv98RUHdqMdgF2j3WXv0s7mz3eBnvp7sreC/Z+fLruli/3ANVYsKE18VXRQvVZpyDOsTLAlUIRcf95/Ma4xexYPX6/aP0x9APvH0nAj1ImcVclQJUEMMaxmeCu62Vj8GkP/L18yWUXO8vbCeHe1T0vabSWdt/PO+A6/z/i4Lfp/MC5InKM13rqT2LBlyx63pjy6UB/aAW8/TrnRmj1jaL3Lx7v2kD1uAj/xNDFo2xqgazXrWISSiZbIWO00Uu37x7tHbsMH/39Ql+uyviLVmyW17mYsXCp1QZ7rN3HJ3F+Nl+uVtqy3F5XehemE5HnU1/sGpL75cNBAKBQCAQCAQCgUDgP+cvGTOKUODeYPQAAAAASUVORK5CYII=" alt="" 
className="w-full h-full rounded-3xl"
/></a>
          </li>
          <li className="mb-2 w-10 h-auto">
            <a href="https://www.instagram.com/ecasnist/" target="_blank"><img src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg" alt="" 
            className="w-full h-full rounded-3xl"
            /></a>
          </li>
          <li className="mb-2 w-10 h-full">
            <a href="https://www.linkedin.com/company/eca-snist/about/" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""
            className="rounded-3xl"
            />
            </a>
          </li>
        </ul>
       </div>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <div className="block">
      <h3 className="text-pink-400 font-bold text-xl"><u>For Details:</u></h3>
      <div className="flex">
      <p className="text-white block font-bold text-lg">8019045490,</p>
      <p className="block text-white font-bold text-lg">9494071515</p>
      </div>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <p className="text-lg font-bold flex text-yellow-500"><span className="text-white">&#169;</span> The ECA club - SNIST,<p className="text-lg pl-3 text-white">All Right Reserved.</p></p>
    </div>
</footer>
    </>
  );
}


const Footer = ()=>{
    return(
        <footer>
          <div className="hidden lg:flex">
      <FooterLg/>
          </div>
        <div className="hidden md:flex lg:hidden">
          <Footermd/>
        </div>
        <div className="sm:flex md:hidden lg:hidden">
          <FooterSm/>
          </div>
        </footer>
    );
}

export default Footer;
