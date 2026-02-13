import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; // เพิ่ม
import { Model } from 'mongoose'; // เพิ่ม
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/product.schema'; // เพิ่ม

@Injectable()
export class ProductsService {
  // Inject Model เข้ามาใช้งาน
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto) {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save(); // สั่งบันทึกลง MongoDB
  }

  async findAll() {
    return this.productModel.find().exec(); // ดึงข้อมูลทั้งหมด
  }

  async findOne(id: string) { // เปลี่ยน id เป็น string
    return this.productModel.findById(id).exec();
  }

  async update(id: string, updateProductDto: UpdateProductDto) { // เปลี่ยน id เป็น string
    return this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true }).exec();
  }

  async remove(id: string) { // เปลี่ยน id เป็น string
    return this.productModel.findByIdAndDelete(id).exec();
  }
}