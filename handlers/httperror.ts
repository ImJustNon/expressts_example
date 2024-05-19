import { Request, Response, NextFunction } from 'express';


export function httpErrorHandler(err: any, req: Request, res: Response, next: NextFunction): void {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
}