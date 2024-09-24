import * as boardsService from "../services/boardsService.js";

export const getAllBoards = async (req, res, next) => {
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  try {
    const total = await boardsService.countBoards();
    const result = await boardsService.getAllBoards({ skip, limit });
    res.status(200).json({
      result,
      total,
    });
  } catch (error) {
    next(error);
  }
};
