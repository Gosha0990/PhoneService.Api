﻿using PhoneService.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhoneService.Core.Interfaces
{
    public interface IPhoneServiceCore
    {
        public PhoneConverResponse PhoneConvert(PhonrConvertRequest phoneNumber);
    }
}
