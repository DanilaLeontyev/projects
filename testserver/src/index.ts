import "reflect-metadata";
import { createConnection } from "typeorm";
import { Project } from "./entity/Project";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const project = new Project();
    project.name = "Timber";
    project.description = null;
    await connection.manager.save(project);
    console.log("Saved a new project with id: " + project.id);

    console.log("Loading project from the database...");
    const projects = await connection.manager.find(Project);
    console.log("Loaded users: ", projects);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
