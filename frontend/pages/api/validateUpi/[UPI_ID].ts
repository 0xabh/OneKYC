import getUpiVpa  from '../../../utils/getUpiVpa';

export default async function handler(req: any, res: any) {
  const { UPI_ID } = req.query;
  const { nameAtBank } = await getUpiVpa(UPI_ID);
  res.status(200).json({ nameAtBank });
}