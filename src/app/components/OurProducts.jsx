'use client';

import { useState } from 'react';
import TabProducts from './TabProducts';

const OurProduct = () => {
  const [activeTab, setActiveTab] = useState(2);

  const sale = [
    {
      img: 'https://s3-alpha-sig.figma.com/img/1610/3eab/62e972ec931381e36a3868cd328fd47a?Expires=1696809600&Signature=UbaCtAplzrKLh5kzSZOQuYQ3lmrHrtHGg0N3sOcPSJqgwI1SObxOBR7OvuJpltfc6cNXi61BIWUbtq6hUd9tAvp~OFi~bx1IrrnbQbjlSvuG1Hb5G~HrYWViwTodvflcdlqIEVB2YtDHIhNgAYegIa7ZoatzzPA7cgt0Z5zCdDxjERG7cCdMW-uTq3aujssOBsj3PwO78OdRrxYlvWuacz7ZK2dnE74uzgvSKahSbSJLqmB~xa5Ixnf6urjhM-tQExwsnjL~SrKV4~G1XClWe3UQYqGbMwd7WngHwTa-9TgYc5104op2ivPTC3G4DgP0Z4YPnoMR832WMiHSY9KrBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#DAD6D2]',

      title: 'Summer Wind Crop Shirt',
      price: 46.85,
      review: 4.6,
    },
    ,
    {
      img: 'https://s3-alpha-sig.figma.com/img/b09a/14f8/a9f275d70fed27dd1a041faf3c3c6d1d?Expires=1696809600&Signature=KuSIKWloKlBj6P~elcLxu700ivvkjfLgZzZx1Si08TuYtNuqLwEoAHyoDIQQAz8M3Rd1n9WMvbRxkKsxcFgrQGHb2QosQ9YYFiB~1V5uyt200gphCN68dmqguWNUvfc60WZk7A3UFAhxlqMIC80zbh-tlUf0PSyy7mVWL4INvHqtZ6Me-AuFXHD2PxJILIq5n3YwiOheviXimTnpuugF8t9~ioMtEefeK80-8JdL-zH1a4cryfgYAEwtUjN~nXC-SY47O2HJMvXoYlUuwRl232BHAjLY8p2~SLYlOj~f59017tzMeoK7aXZ9b~kTPgnjjSmDFKiBIyANXs9-medZ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E6E6EE]',
      title: 'Tailored Jacket',
      price: 37.76,
      review: 4.8,
    },

    {
      img: 'https://s3-alpha-sig.figma.com/img/3793/82c4/6ac91e859ec53c4e535b4a8232ee23de?Expires=1696809600&Signature=aE5qGRP0X9ZKNtBRZon-uFSlPsPCF0r8itGgdiLk5rBkAHUI3Jrt9C2iVy4v9CW0DIaErRYut05t0nWQUMjbmbVM6tmvB~O1vmpWtPXLic~3yveE2H7IzB~bPBpJvMp1L2xdBBkfkf9hM9xGCe03HWYXM4bTU4eDbJDbAz~3kB6MyU7OBPLNYeWG4-05HWMvEoCWH7fu2e5cdOEGvbz4bAWvLWtvUQMSSe7c5sO1PEalkjbwKxuVaCR3S35TNfH~pMOMwn9VKZOhxXTutwZwdW4E-c~ItuucVb4Erz2P4U~SF84gHRB~eIVHewEN40qNIS6uXJHC3km8O0MLNWz5JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#EAEAEA]',
      title: 'Printed Loose T-shirt',
      price: 25.15,
      review: 4.9,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/1610/3eab/62e972ec931381e36a3868cd328fd47a?Expires=1696809600&Signature=UbaCtAplzrKLh5kzSZOQuYQ3lmrHrtHGg0N3sOcPSJqgwI1SObxOBR7OvuJpltfc6cNXi61BIWUbtq6hUd9tAvp~OFi~bx1IrrnbQbjlSvuG1Hb5G~HrYWViwTodvflcdlqIEVB2YtDHIhNgAYegIa7ZoatzzPA7cgt0Z5zCdDxjERG7cCdMW-uTq3aujssOBsj3PwO78OdRrxYlvWuacz7ZK2dnE74uzgvSKahSbSJLqmB~xa5Ixnf6urjhM-tQExwsnjL~SrKV4~G1XClWe3UQYqGbMwd7WngHwTa-9TgYc5104op2ivPTC3G4DgP0Z4YPnoMR832WMiHSY9KrBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#DAD6D2]',

      title: 'Summer Wind Crop Shirt',
      price: 46.85,
      review: 4.6,
    },
    ,
    {
      img: 'https://s3-alpha-sig.figma.com/img/b09a/14f8/a9f275d70fed27dd1a041faf3c3c6d1d?Expires=1696809600&Signature=KuSIKWloKlBj6P~elcLxu700ivvkjfLgZzZx1Si08TuYtNuqLwEoAHyoDIQQAz8M3Rd1n9WMvbRxkKsxcFgrQGHb2QosQ9YYFiB~1V5uyt200gphCN68dmqguWNUvfc60WZk7A3UFAhxlqMIC80zbh-tlUf0PSyy7mVWL4INvHqtZ6Me-AuFXHD2PxJILIq5n3YwiOheviXimTnpuugF8t9~ioMtEefeK80-8JdL-zH1a4cryfgYAEwtUjN~nXC-SY47O2HJMvXoYlUuwRl232BHAjLY8p2~SLYlOj~f59017tzMeoK7aXZ9b~kTPgnjjSmDFKiBIyANXs9-medZ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E6E6EE]',
      title: 'Tailored Jacket',
      price: 37.76,
      review: 4.8,
    },

    {
      img: 'https://s3-alpha-sig.figma.com/img/ecce/cc95/71bf273d78f602b3598feda38bf1c22c?Expires=1696809600&Signature=Qd9hZe8rckJ7jLSd2NNrmJjCvSKgb~oOfmVOMfXT0JvMGirYEpYP8Sf0BfeLIvYWPhHqHsj8Qi7X6WZtLruo56IKC1uxXWDaD995hzScfBLzAOxjewokCqoM1XssV8w5Yh1f6IQMe4i5FHZZw~gdvHnNYV6P3k36urveOGFOgsPdmGq9z8kA4qtbXboDO-WU8K6i~DVsoK6GGcR7l4Wf~L11ataeA-cw-G7HReUzccaw-cu5Fgen2AzOcdLGf-~pSELx7WyXlwp1K9cRlvvOslHa15fpv56Or~5JwDzlXiFTdjuv80GJ1qSfoxSPDolfhEywP9eRhIs~zsRp0s3jlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E5E6EA]',

      title: 'Solid Round Neck T-shirt',
      price: 38.08,
      review: 4.7,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/b3ed/cb28/2a2884f716a8289668a5bf36aef41869?Expires=1696809600&Signature=G8QrfsoIXCWFRrkC7FtzhYFlpByBe9JfqmuAB91phMnlUI1wSAaE3dzeVIvLpd6Cmav6kSS5eqifEg9zcMqLAizAcSa-h9NdqTCqAavFkyAdb-fEpQ8B1IOCdPb0L~JChx64LVWBAzaNzcnWMoNn08v8hhKWA4xZLYGR20jpclBIB6VH9G3tAndShwOdLTMhzactx9HBdZM3W1q1voJjdDJuw0LfEat4LEe3WVIhcYvRA1PMfFl-VDTY7~N6EsKgjk2lNr10nxQhJrSvaJBgbOHGVfgdCv7wQF50tKYbgJJsOK1wFiQikKCfAyVy1-dCcIrbXjCvIXUmXzHal0LLgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#DAD6D2]',
      title: 'Shine On Me Blouse',
      price: 39.35,
      review: 4.2,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/43db/f937/01126211f33c8a4147b1bfcfcc6d8e22?Expires=1696809600&Signature=ahJ-hFy78C~o7eGNj-XVnyA91iXiwNGPhAY-J9HaiyzsTr9EAUL3j468WGCG4wYYaF~b54N8FvpCJp3vPuqa8ffu43M0UcT6V5UEDz2LDoarCUkBV1X9MB6sqQzwaM-Fs14AwXIB703CuCBOIlv2DubWCUewRNs71jo9Fj1b-7-A5MsPix1KAkeL8p4APWdCtXJfyUaGcBPWzgQ9i2VG9WaQxbrVQOh31RhCok3ZUG1B6fwuh2Mn~J7y7ZwR6gRdELuV2Vd2AvvdUSqvooPMp2fKHW-0DKGcEhrp33orq09ogEqCo8kKtjE39LW3MUExxLeR7jus4S3EwbvtMQQB8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E6E6EE]',

      title: 'Gray Solid Padded Jacket',
      price: 42.25,
      review: 4.1,
    },
  ];

  const hot = [
    {
      img: 'https://s3-alpha-sig.figma.com/img/bf93/6cef/0caa01d70434a2ed2d0370360150bf5e?Expires=1696809600&Signature=YH9HpcvQaJwhaWCjMA3h5Zubgm7Uh95mpZRFRvJiysa~KvaR1EsMFmQBJwzcIuwXv7UrRzY9IU6RcXx5oh~qKhYMGHQM-Eyoiy1Bfc4o9uEEmh8ihVzx-T9RwDIbiFf8Hv9PsIwFGK~fwshYM-WUqgaZDgP7B23k7jIlq1MMLqGXBXbKhZjJjkrA3x8BHBvzyWwicjoGslJpOXI9VXziS-Lql5Z38Q3SWnrRxC328zDu7dMJkDjhnVppa~AJpkV1eAFrx3lE1wLuQrYhZcjdhNBEOnQKf4gjdj0r8eXwdi6txnKXRYBbsM7P2qulUKftqn0krSB7oR4mMS~-GrHgng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E5E6EA]',
      title: 'Spread Collar Shirt',
      price: 40.35,
      review: 4.6,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/b0ae/4c3a/5b0078ba701d4e3b179682dc806fb5ee?Expires=1696809600&Signature=lSjr0BEUQNiIsf5DI4pSUi4LMs9UokRsi7OPB-HlpCzZYJhJsu7S0oEs~W-Cr0KTPeNo-pRul3auePdVYaHy8YJLUCO70QYbxN8dJ3f8q30Zq-a-fjzxALVlBivNByj~7PUFFOlPLAfsBKQZl5nQmJDvJTJbVT6bL~Hg~oqxi24pH46kgvXaKcNcMn13RJ0NL-H~ekFxegPSHaB7h14Hf9pRZUN1vk1kcPrN6~gn1ZHSy7HgyaDBRnWpxiS8mgMmzBCyG790b5dAJ5p6OCKarOrQiS-tWAOKpYzNmLkTNcSjAznBgCRqu0OeUiX7JglNg7VfEtOb8LW~dmPm2ql3Pw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',

      color: 'bg-[#E5E6EA]',
      title: 'White Solid Formal Shirt',
      price: 48.11,
      review: 4.9,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/b3ed/cb28/2a2884f716a8289668a5bf36aef41869?Expires=1696809600&Signature=G8QrfsoIXCWFRrkC7FtzhYFlpByBe9JfqmuAB91phMnlUI1wSAaE3dzeVIvLpd6Cmav6kSS5eqifEg9zcMqLAizAcSa-h9NdqTCqAavFkyAdb-fEpQ8B1IOCdPb0L~JChx64LVWBAzaNzcnWMoNn08v8hhKWA4xZLYGR20jpclBIB6VH9G3tAndShwOdLTMhzactx9HBdZM3W1q1voJjdDJuw0LfEat4LEe3WVIhcYvRA1PMfFl-VDTY7~N6EsKgjk2lNr10nxQhJrSvaJBgbOHGVfgdCv7wQF50tKYbgJJsOK1wFiQikKCfAyVy1-dCcIrbXjCvIXUmXzHal0LLgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#DAD6D2]',
      title: 'Shine On Me Blouse',
      price: 39.35,
      review: 4.2,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/43db/f937/01126211f33c8a4147b1bfcfcc6d8e22?Expires=1696809600&Signature=ahJ-hFy78C~o7eGNj-XVnyA91iXiwNGPhAY-J9HaiyzsTr9EAUL3j468WGCG4wYYaF~b54N8FvpCJp3vPuqa8ffu43M0UcT6V5UEDz2LDoarCUkBV1X9MB6sqQzwaM-Fs14AwXIB703CuCBOIlv2DubWCUewRNs71jo9Fj1b-7-A5MsPix1KAkeL8p4APWdCtXJfyUaGcBPWzgQ9i2VG9WaQxbrVQOh31RhCok3ZUG1B6fwuh2Mn~J7y7ZwR6gRdELuV2Vd2AvvdUSqvooPMp2fKHW-0DKGcEhrp33orq09ogEqCo8kKtjE39LW3MUExxLeR7jus4S3EwbvtMQQB8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E6E6EE]',

      title: 'Gray Solid Padded Jacket',
      price: 42.25,
      review: 4.1,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/3793/82c4/6ac91e859ec53c4e535b4a8232ee23de?Expires=1696809600&Signature=aE5qGRP0X9ZKNtBRZon-uFSlPsPCF0r8itGgdiLk5rBkAHUI3Jrt9C2iVy4v9CW0DIaErRYut05t0nWQUMjbmbVM6tmvB~O1vmpWtPXLic~3yveE2H7IzB~bPBpJvMp1L2xdBBkfkf9hM9xGCe03HWYXM4bTU4eDbJDbAz~3kB6MyU7OBPLNYeWG4-05HWMvEoCWH7fu2e5cdOEGvbz4bAWvLWtvUQMSSe7c5sO1PEalkjbwKxuVaCR3S35TNfH~pMOMwn9VKZOhxXTutwZwdW4E-c~ItuucVb4Erz2P4U~SF84gHRB~eIVHewEN40qNIS6uXJHC3km8O0MLNWz5JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#EAEAEA]',
      title: 'Printed Loose T-shirt',
      price: 25.15,
      review: 4.9,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/1610/3eab/62e972ec931381e36a3868cd328fd47a?Expires=1696809600&Signature=UbaCtAplzrKLh5kzSZOQuYQ3lmrHrtHGg0N3sOcPSJqgwI1SObxOBR7OvuJpltfc6cNXi61BIWUbtq6hUd9tAvp~OFi~bx1IrrnbQbjlSvuG1Hb5G~HrYWViwTodvflcdlqIEVB2YtDHIhNgAYegIa7ZoatzzPA7cgt0Z5zCdDxjERG7cCdMW-uTq3aujssOBsj3PwO78OdRrxYlvWuacz7ZK2dnE74uzgvSKahSbSJLqmB~xa5Ixnf6urjhM-tQExwsnjL~SrKV4~G1XClWe3UQYqGbMwd7WngHwTa-9TgYc5104op2ivPTC3G4DgP0Z4YPnoMR832WMiHSY9KrBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#DAD6D2]',

      title: 'Summer Wind Crop Shirt',
      price: 46.85,
      review: 4.6,
    },
    ,
    {
      img: 'https://s3-alpha-sig.figma.com/img/b09a/14f8/a9f275d70fed27dd1a041faf3c3c6d1d?Expires=1696809600&Signature=KuSIKWloKlBj6P~elcLxu700ivvkjfLgZzZx1Si08TuYtNuqLwEoAHyoDIQQAz8M3Rd1n9WMvbRxkKsxcFgrQGHb2QosQ9YYFiB~1V5uyt200gphCN68dmqguWNUvfc60WZk7A3UFAhxlqMIC80zbh-tlUf0PSyy7mVWL4INvHqtZ6Me-AuFXHD2PxJILIq5n3YwiOheviXimTnpuugF8t9~ioMtEefeK80-8JdL-zH1a4cryfgYAEwtUjN~nXC-SY47O2HJMvXoYlUuwRl232BHAjLY8p2~SLYlOj~f59017tzMeoK7aXZ9b~kTPgnjjSmDFKiBIyANXs9-medZ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E6E6EE]',
      title: 'Tailored Jacket',
      price: 37.76,
      review: 4.8,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/ecce/cc95/71bf273d78f602b3598feda38bf1c22c?Expires=1696809600&Signature=Qd9hZe8rckJ7jLSd2NNrmJjCvSKgb~oOfmVOMfXT0JvMGirYEpYP8Sf0BfeLIvYWPhHqHsj8Qi7X6WZtLruo56IKC1uxXWDaD995hzScfBLzAOxjewokCqoM1XssV8w5Yh1f6IQMe4i5FHZZw~gdvHnNYV6P3k36urveOGFOgsPdmGq9z8kA4qtbXboDO-WU8K6i~DVsoK6GGcR7l4Wf~L11ataeA-cw-G7HReUzccaw-cu5Fgen2AzOcdLGf-~pSELx7WyXlwp1K9cRlvvOslHa15fpv56Or~5JwDzlXiFTdjuv80GJ1qSfoxSPDolfhEywP9eRhIs~zsRp0s3jlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E5E6EA]',

      title: 'Solid Round Neck T-shirt',
      price: 38.08,
      review: 4.7,
    },
  ];
  const newArrivals = [
    {
      img: 'https://s3-alpha-sig.figma.com/img/3793/82c4/6ac91e859ec53c4e535b4a8232ee23de?Expires=1696809600&Signature=aE5qGRP0X9ZKNtBRZon-uFSlPsPCF0r8itGgdiLk5rBkAHUI3Jrt9C2iVy4v9CW0DIaErRYut05t0nWQUMjbmbVM6tmvB~O1vmpWtPXLic~3yveE2H7IzB~bPBpJvMp1L2xdBBkfkf9hM9xGCe03HWYXM4bTU4eDbJDbAz~3kB6MyU7OBPLNYeWG4-05HWMvEoCWH7fu2e5cdOEGvbz4bAWvLWtvUQMSSe7c5sO1PEalkjbwKxuVaCR3S35TNfH~pMOMwn9VKZOhxXTutwZwdW4E-c~ItuucVb4Erz2P4U~SF84gHRB~eIVHewEN40qNIS6uXJHC3km8O0MLNWz5JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#EAEAEA]',
      title: 'Printed Loose T-shirt',
      price: 25.15,
      review: 4.9,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/1610/3eab/62e972ec931381e36a3868cd328fd47a?Expires=1696809600&Signature=UbaCtAplzrKLh5kzSZOQuYQ3lmrHrtHGg0N3sOcPSJqgwI1SObxOBR7OvuJpltfc6cNXi61BIWUbtq6hUd9tAvp~OFi~bx1IrrnbQbjlSvuG1Hb5G~HrYWViwTodvflcdlqIEVB2YtDHIhNgAYegIa7ZoatzzPA7cgt0Z5zCdDxjERG7cCdMW-uTq3aujssOBsj3PwO78OdRrxYlvWuacz7ZK2dnE74uzgvSKahSbSJLqmB~xa5Ixnf6urjhM-tQExwsnjL~SrKV4~G1XClWe3UQYqGbMwd7WngHwTa-9TgYc5104op2ivPTC3G4DgP0Z4YPnoMR832WMiHSY9KrBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#DAD6D2]',

      title: 'Summer Wind Crop Shirt',
      price: 46.85,
      review: 4.6,
    },
    ,
    {
      img: 'https://s3-alpha-sig.figma.com/img/b09a/14f8/a9f275d70fed27dd1a041faf3c3c6d1d?Expires=1696809600&Signature=KuSIKWloKlBj6P~elcLxu700ivvkjfLgZzZx1Si08TuYtNuqLwEoAHyoDIQQAz8M3Rd1n9WMvbRxkKsxcFgrQGHb2QosQ9YYFiB~1V5uyt200gphCN68dmqguWNUvfc60WZk7A3UFAhxlqMIC80zbh-tlUf0PSyy7mVWL4INvHqtZ6Me-AuFXHD2PxJILIq5n3YwiOheviXimTnpuugF8t9~ioMtEefeK80-8JdL-zH1a4cryfgYAEwtUjN~nXC-SY47O2HJMvXoYlUuwRl232BHAjLY8p2~SLYlOj~f59017tzMeoK7aXZ9b~kTPgnjjSmDFKiBIyANXs9-medZ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E6E6EE]',
      title: 'Tailored Jacket',
      price: 37.76,
      review: 4.8,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/1610/3eab/62e972ec931381e36a3868cd328fd47a?Expires=1696809600&Signature=UbaCtAplzrKLh5kzSZOQuYQ3lmrHrtHGg0N3sOcPSJqgwI1SObxOBR7OvuJpltfc6cNXi61BIWUbtq6hUd9tAvp~OFi~bx1IrrnbQbjlSvuG1Hb5G~HrYWViwTodvflcdlqIEVB2YtDHIhNgAYegIa7ZoatzzPA7cgt0Z5zCdDxjERG7cCdMW-uTq3aujssOBsj3PwO78OdRrxYlvWuacz7ZK2dnE74uzgvSKahSbSJLqmB~xa5Ixnf6urjhM-tQExwsnjL~SrKV4~G1XClWe3UQYqGbMwd7WngHwTa-9TgYc5104op2ivPTC3G4DgP0Z4YPnoMR832WMiHSY9KrBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#DAD6D2]',

      title: 'Summer Wind Crop Shirt',
      price: 46.85,
      review: 4.6,
    },
    ,
    {
      img: 'https://s3-alpha-sig.figma.com/img/b09a/14f8/a9f275d70fed27dd1a041faf3c3c6d1d?Expires=1696809600&Signature=KuSIKWloKlBj6P~elcLxu700ivvkjfLgZzZx1Si08TuYtNuqLwEoAHyoDIQQAz8M3Rd1n9WMvbRxkKsxcFgrQGHb2QosQ9YYFiB~1V5uyt200gphCN68dmqguWNUvfc60WZk7A3UFAhxlqMIC80zbh-tlUf0PSyy7mVWL4INvHqtZ6Me-AuFXHD2PxJILIq5n3YwiOheviXimTnpuugF8t9~ioMtEefeK80-8JdL-zH1a4cryfgYAEwtUjN~nXC-SY47O2HJMvXoYlUuwRl232BHAjLY8p2~SLYlOj~f59017tzMeoK7aXZ9b~kTPgnjjSmDFKiBIyANXs9-medZ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E6E6EE]',
      title: 'Tailored Jacket',
      price: 37.76,
      review: 4.8,
    },

    {
      img: 'https://s3-alpha-sig.figma.com/img/ecce/cc95/71bf273d78f602b3598feda38bf1c22c?Expires=1696809600&Signature=Qd9hZe8rckJ7jLSd2NNrmJjCvSKgb~oOfmVOMfXT0JvMGirYEpYP8Sf0BfeLIvYWPhHqHsj8Qi7X6WZtLruo56IKC1uxXWDaD995hzScfBLzAOxjewokCqoM1XssV8w5Yh1f6IQMe4i5FHZZw~gdvHnNYV6P3k36urveOGFOgsPdmGq9z8kA4qtbXboDO-WU8K6i~DVsoK6GGcR7l4Wf~L11ataeA-cw-G7HReUzccaw-cu5Fgen2AzOcdLGf-~pSELx7WyXlwp1K9cRlvvOslHa15fpv56Or~5JwDzlXiFTdjuv80GJ1qSfoxSPDolfhEywP9eRhIs~zsRp0s3jlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E5E6EA]',

      title: 'Solid Round Neck T-shirt',
      price: 38.08,
      review: 4.7,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/b3ed/cb28/2a2884f716a8289668a5bf36aef41869?Expires=1696809600&Signature=G8QrfsoIXCWFRrkC7FtzhYFlpByBe9JfqmuAB91phMnlUI1wSAaE3dzeVIvLpd6Cmav6kSS5eqifEg9zcMqLAizAcSa-h9NdqTCqAavFkyAdb-fEpQ8B1IOCdPb0L~JChx64LVWBAzaNzcnWMoNn08v8hhKWA4xZLYGR20jpclBIB6VH9G3tAndShwOdLTMhzactx9HBdZM3W1q1voJjdDJuw0LfEat4LEe3WVIhcYvRA1PMfFl-VDTY7~N6EsKgjk2lNr10nxQhJrSvaJBgbOHGVfgdCv7wQF50tKYbgJJsOK1wFiQikKCfAyVy1-dCcIrbXjCvIXUmXzHal0LLgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#DAD6D2]',
      title: 'Shine On Me Blouse',
      price: 39.35,
      review: 4.2,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/43db/f937/01126211f33c8a4147b1bfcfcc6d8e22?Expires=1696809600&Signature=ahJ-hFy78C~o7eGNj-XVnyA91iXiwNGPhAY-J9HaiyzsTr9EAUL3j468WGCG4wYYaF~b54N8FvpCJp3vPuqa8ffu43M0UcT6V5UEDz2LDoarCUkBV1X9MB6sqQzwaM-Fs14AwXIB703CuCBOIlv2DubWCUewRNs71jo9Fj1b-7-A5MsPix1KAkeL8p4APWdCtXJfyUaGcBPWzgQ9i2VG9WaQxbrVQOh31RhCok3ZUG1B6fwuh2Mn~J7y7ZwR6gRdELuV2Vd2AvvdUSqvooPMp2fKHW-0DKGcEhrp33orq09ogEqCo8kKtjE39LW3MUExxLeR7jus4S3EwbvtMQQB8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E6E6EE]',

      title: 'Gray Solid Padded Jacket',
      price: 42.25,
      review: 4.1,
    },
  ];

  const acessories = [
    {
      img: 'https://s3-alpha-sig.figma.com/img/3793/82c4/6ac91e859ec53c4e535b4a8232ee23de?Expires=1696809600&Signature=aE5qGRP0X9ZKNtBRZon-uFSlPsPCF0r8itGgdiLk5rBkAHUI3Jrt9C2iVy4v9CW0DIaErRYut05t0nWQUMjbmbVM6tmvB~O1vmpWtPXLic~3yveE2H7IzB~bPBpJvMp1L2xdBBkfkf9hM9xGCe03HWYXM4bTU4eDbJDbAz~3kB6MyU7OBPLNYeWG4-05HWMvEoCWH7fu2e5cdOEGvbz4bAWvLWtvUQMSSe7c5sO1PEalkjbwKxuVaCR3S35TNfH~pMOMwn9VKZOhxXTutwZwdW4E-c~ItuucVb4Erz2P4U~SF84gHRB~eIVHewEN40qNIS6uXJHC3km8O0MLNWz5JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#EAEAEA]',
      title: 'Printed Loose T-shirt',
      price: 25.15,
      review: 4.9,
    },

    {
      img: 'https://s3-alpha-sig.figma.com/img/b09a/14f8/a9f275d70fed27dd1a041faf3c3c6d1d?Expires=1696809600&Signature=KuSIKWloKlBj6P~elcLxu700ivvkjfLgZzZx1Si08TuYtNuqLwEoAHyoDIQQAz8M3Rd1n9WMvbRxkKsxcFgrQGHb2QosQ9YYFiB~1V5uyt200gphCN68dmqguWNUvfc60WZk7A3UFAhxlqMIC80zbh-tlUf0PSyy7mVWL4INvHqtZ6Me-AuFXHD2PxJILIq5n3YwiOheviXimTnpuugF8t9~ioMtEefeK80-8JdL-zH1a4cryfgYAEwtUjN~nXC-SY47O2HJMvXoYlUuwRl232BHAjLY8p2~SLYlOj~f59017tzMeoK7aXZ9b~kTPgnjjSmDFKiBIyANXs9-medZ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E6E6EE]',
      title: 'Tailored Jacket',
      price: 37.76,
      review: 4.8,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/1610/3eab/62e972ec931381e36a3868cd328fd47a?Expires=1696809600&Signature=UbaCtAplzrKLh5kzSZOQuYQ3lmrHrtHGg0N3sOcPSJqgwI1SObxOBR7OvuJpltfc6cNXi61BIWUbtq6hUd9tAvp~OFi~bx1IrrnbQbjlSvuG1Hb5G~HrYWViwTodvflcdlqIEVB2YtDHIhNgAYegIa7ZoatzzPA7cgt0Z5zCdDxjERG7cCdMW-uTq3aujssOBsj3PwO78OdRrxYlvWuacz7ZK2dnE74uzgvSKahSbSJLqmB~xa5Ixnf6urjhM-tQExwsnjL~SrKV4~G1XClWe3UQYqGbMwd7WngHwTa-9TgYc5104op2ivPTC3G4DgP0Z4YPnoMR832WMiHSY9KrBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#DAD6D2]',

      title: 'Summer Wind Crop Shirt',
      price: 46.85,
      review: 4.6,
    },
    ,
    {
      img: 'https://s3-alpha-sig.figma.com/img/b09a/14f8/a9f275d70fed27dd1a041faf3c3c6d1d?Expires=1696809600&Signature=KuSIKWloKlBj6P~elcLxu700ivvkjfLgZzZx1Si08TuYtNuqLwEoAHyoDIQQAz8M3Rd1n9WMvbRxkKsxcFgrQGHb2QosQ9YYFiB~1V5uyt200gphCN68dmqguWNUvfc60WZk7A3UFAhxlqMIC80zbh-tlUf0PSyy7mVWL4INvHqtZ6Me-AuFXHD2PxJILIq5n3YwiOheviXimTnpuugF8t9~ioMtEefeK80-8JdL-zH1a4cryfgYAEwtUjN~nXC-SY47O2HJMvXoYlUuwRl232BHAjLY8p2~SLYlOj~f59017tzMeoK7aXZ9b~kTPgnjjSmDFKiBIyANXs9-medZ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E6E6EE]',
      title: 'Tailored Jacket',
      price: 37.76,
      review: 4.8,
    },

    {
      img: 'https://s3-alpha-sig.figma.com/img/ecce/cc95/71bf273d78f602b3598feda38bf1c22c?Expires=1696809600&Signature=Qd9hZe8rckJ7jLSd2NNrmJjCvSKgb~oOfmVOMfXT0JvMGirYEpYP8Sf0BfeLIvYWPhHqHsj8Qi7X6WZtLruo56IKC1uxXWDaD995hzScfBLzAOxjewokCqoM1XssV8w5Yh1f6IQMe4i5FHZZw~gdvHnNYV6P3k36urveOGFOgsPdmGq9z8kA4qtbXboDO-WU8K6i~DVsoK6GGcR7l4Wf~L11ataeA-cw-G7HReUzccaw-cu5Fgen2AzOcdLGf-~pSELx7WyXlwp1K9cRlvvOslHa15fpv56Or~5JwDzlXiFTdjuv80GJ1qSfoxSPDolfhEywP9eRhIs~zsRp0s3jlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E5E6EA]',

      title: 'Solid Round Neck T-shirt',
      price: 38.08,
      review: 4.7,
    },

    {
      img: 'https://s3-alpha-sig.figma.com/img/b3ed/cb28/2a2884f716a8289668a5bf36aef41869?Expires=1696809600&Signature=G8QrfsoIXCWFRrkC7FtzhYFlpByBe9JfqmuAB91phMnlUI1wSAaE3dzeVIvLpd6Cmav6kSS5eqifEg9zcMqLAizAcSa-h9NdqTCqAavFkyAdb-fEpQ8B1IOCdPb0L~JChx64LVWBAzaNzcnWMoNn08v8hhKWA4xZLYGR20jpclBIB6VH9G3tAndShwOdLTMhzactx9HBdZM3W1q1voJjdDJuw0LfEat4LEe3WVIhcYvRA1PMfFl-VDTY7~N6EsKgjk2lNr10nxQhJrSvaJBgbOHGVfgdCv7wQF50tKYbgJJsOK1wFiQikKCfAyVy1-dCcIrbXjCvIXUmXzHal0LLgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#DAD6D2]',
      title: 'Shine On Me Blouse',
      price: 39.35,
      review: 4.2,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/43db/f937/01126211f33c8a4147b1bfcfcc6d8e22?Expires=1696809600&Signature=ahJ-hFy78C~o7eGNj-XVnyA91iXiwNGPhAY-J9HaiyzsTr9EAUL3j468WGCG4wYYaF~b54N8FvpCJp3vPuqa8ffu43M0UcT6V5UEDz2LDoarCUkBV1X9MB6sqQzwaM-Fs14AwXIB703CuCBOIlv2DubWCUewRNs71jo9Fj1b-7-A5MsPix1KAkeL8p4APWdCtXJfyUaGcBPWzgQ9i2VG9WaQxbrVQOh31RhCok3ZUG1B6fwuh2Mn~J7y7ZwR6gRdELuV2Vd2AvvdUSqvooPMp2fKHW-0DKGcEhrp33orq09ogEqCo8kKtjE39LW3MUExxLeR7jus4S3EwbvtMQQB8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#E6E6EE]',

      title: 'Gray Solid Padded Jacket',
      price: 42.25,
      review: 4.1,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/1610/3eab/62e972ec931381e36a3868cd328fd47a?Expires=1696809600&Signature=UbaCtAplzrKLh5kzSZOQuYQ3lmrHrtHGg0N3sOcPSJqgwI1SObxOBR7OvuJpltfc6cNXi61BIWUbtq6hUd9tAvp~OFi~bx1IrrnbQbjlSvuG1Hb5G~HrYWViwTodvflcdlqIEVB2YtDHIhNgAYegIa7ZoatzzPA7cgt0Z5zCdDxjERG7cCdMW-uTq3aujssOBsj3PwO78OdRrxYlvWuacz7ZK2dnE74uzgvSKahSbSJLqmB~xa5Ixnf6urjhM-tQExwsnjL~SrKV4~G1XClWe3UQYqGbMwd7WngHwTa-9TgYc5104op2ivPTC3G4DgP0Z4YPnoMR832WMiHSY9KrBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      color: 'bg-[#DAD6D2]',

      title: 'Summer Wind Crop Shirt',
      price: 46.85,
      review: 4.6,
    },
  ];

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const renderTabContent = () => {
    if (activeTab === 1) {
      // Render content for Tab 1
      return <TabProducts cardsData={sale} />;
    } else if (activeTab === 2) {
      // Render content for Tab 2
      return <TabProducts cardsData={hot} />;
    } else if (activeTab === 3) {
      // Render content for Tab 3
      return <TabProducts cardsData={newArrivals} />;
    } else if (activeTab === 4) {
      // Render content for Tab 3
      return <TabProducts cardsData={acessories} />;
    }
  };

  return (
    <div className="w-11/12 mx-auto  lg:py-5">
      <div className="text-center">
        <h3 className="text-secondary text-3xl lg:text-[50px] font-[500]">
          Our Products
        </h3>
      </div>

      <div className="flex justify-between lg:justify-around  py-3 lg:pt-8 lg:pb-5">
        <button
          className={`${
            activeTab === 1
              ? 'text-secondary   border-b-2 border-secondary'
              : 'text-black'
          } pb-2 rounded-l text-sm lg:text-xl`}
          onClick={() => handleTabClick(1)}
        >
          SALE
        </button>
        <button
          className={`${
            activeTab === 2
              ? 'text-secondary  border-b-2 border-secondary'
              : 'text-black'
          } pb-2 text-sm lg:text-xl`}
          onClick={() => handleTabClick(2)}
        >
          HOT
        </button>
        <button
          className={`${
            activeTab === 3
              ? 'text-secondary  border-b-2 border-secondary'
              : 'text-black'
          } pb-2  rounded-r text-sm lg:text-xl  `}
          onClick={() => handleTabClick(3)}
        >
          NEW ARRIVALS
        </button>
        <button
          className={`${
            activeTab === 4
              ? 'text-secondary  border-b-2 border-secondary'
              : 'text-black'
          } pb-2 rounded-r text-sm lg:text-xl`}
          onClick={() => handleTabClick(4)}
        >
          ACESSORIES
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default OurProduct;
