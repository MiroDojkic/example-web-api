import { Request, Response, NextFunction, Router } from 'express';
import { IContainer } from 'bottlejs';
import Organisation from './model';

function OrganisationController({ organisationRepository }: IContainer) {
  async function get(req: Request, res: Response, next: NextFunction) {
    return res.send(req.organisation);
  }

  async function getAll(req: Request, res: Response, next: NextFunction) {
    const organisations = await organisationRepository.find({});
    return res.send(organisations);
  }

  async function create(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
    const organisation = new Organisation(name);
    await organisationRepository.save(organisation);
    return res.send(organisation)
  }

  return { get, getAll, create };
}

export default OrganisationController;
