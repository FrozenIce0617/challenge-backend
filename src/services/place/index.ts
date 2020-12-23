import { Place, FixmeType } from '../../types';
import db from '../../schema';

const addPlace = async (req: Place): Promise<FixmeType> => {
  try {
    const { keyword, address } = req;
    const data = await db.Place.create({ keyword, address });

    return { status: true, data };
  } catch (error) {
    return { status: false, message: error };
  }
};

const getPlaces = async (): Promise<FixmeType> => {
  try {
    const data = await db.Place.findAll({});

    return { status: true, data };
  } catch (error) {
    return { status: false, message: error };
  }
};

export default { addPlace, getPlaces };
