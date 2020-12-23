import { Session, FixmeType } from '../../types';
import db from '../../schema';

const addSession = async (req: Session): Promise<FixmeType> => {
  try {
    const { start, end, sensor } = req;
    const data = await db.Session.create({ start, end, sensor });

    return { status: true, data };
  } catch (error) {
    return { status: false, message: error };
  }
};

const getSessions = async (): Promise<FixmeType> => {
  try {
    const data = await db.Session.findAll({});

    return { status: true, data };
  } catch (error) {
    return { status: false, message: error };
  }
};

export default { addSession, getSessions };
