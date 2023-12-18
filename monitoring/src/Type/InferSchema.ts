import { InferAttributes, Model, ModelAttributes, Optional } from "sequelize";

type InferSchema<T extends Model> = ModelAttributes<
    T,
    Optional<InferAttributes<T, { omit: never }>, never>
>;

export default InferSchema;
