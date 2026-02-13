import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // 1. เพิ่ม import นี้
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product, ProductSchema } from './schemas/product.schema'; // 2. เพิ่ม import Schema (ต้องสร้างไฟล์ schema ไว้ก่อนนะ)

@Module({
  imports: [
    // 3. เชื่อมต่อ Schema เข้ากับ Database ตรงนี้
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}