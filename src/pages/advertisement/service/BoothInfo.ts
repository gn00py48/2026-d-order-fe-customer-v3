// import { instance } from "@services/instance";
import { MOCK_BOOTH_DATA } from '../const/mockBoothData';

export interface BoothAdItem {
  boothName: string;
  location: string;
  totalTable: number;
  remainingTable: number;
  boothImage?: string;
}

export interface BoothAdResponse {
  message: string;
  data: BoothAdItem[];
}

// [목업] 아래 주석을 해제하고 목업 블록을 주석처리하면 실제 API로 전환
// export const fetchBoothAds = async (date: string): Promise<BoothAdItem[]> => {
//   const res = await instance.get<BoothAdResponse>(
//     "/api/v3/django/booth/ad-banner/",
//     { params: { date } }
//   );
//   return res.data?.data ?? [];
// };

// [목업] 실제 API 사용 시 아래 블록을 주석처리
export const fetchBoothAds = async (date: string): Promise<BoothAdItem[]> => {
  return MOCK_BOOTH_DATA
    .filter((b) => b.dates.includes(date))
    .map((b) => ({
      boothName: b.boothName,
      location: b.location,
      totalTable: b.boothAllTable,
      remainingTable: b.boothAllTable - b.boothUsageTable,
      boothImage: b.boothImage,
    }));
};
