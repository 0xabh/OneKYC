// pages/api/pan/[PAN_NUMBER].js
import getIdForPan from '../../../utils/getIdForPan';
import getPanDetails from '../../../utils/getPanDetails';

export default async function handler(req: any, res:any) {
  const { PAN_NUMBER } = req.query;
  console.log(PAN_NUMBER);
  const { id, accessToken } = await getIdForPan();
  console.log(id, accessToken);
  const details = await getPanDetails(id, accessToken, PAN_NUMBER);
  console.log(details);
  res.status(200).json({ ...details });
}
