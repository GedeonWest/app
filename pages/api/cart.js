import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

export default async function handle(request, response) {
  await mongooseConnect();
  const { ids } = request.body;
  response.json(await Product.find({ _id: ids }));
}
