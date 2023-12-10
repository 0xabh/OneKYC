import getOtp  from '../../../utils/getOtp';

export default async function handler(req: any, res: any) {
  const { MOBILE_NUMBER } = req.query;
  const { referenceId } = await getOtp(MOBILE_NUMBER);
  res.status(200).json({ referenceId });
}
