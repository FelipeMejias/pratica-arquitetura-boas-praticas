import connection from "../database.js";

function selectEvents(id){
    return connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [id]
      );
}

function insertEvent(id,value,type){
return connection.query(
    `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
    [id, value, type]
  );
}

export const financialRepository={
    selectEvents,
    insertEvent
}