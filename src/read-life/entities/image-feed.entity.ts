import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ImageFeedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    comment: '标题',
  })
  title: string;

  @Column({
    length: 50,
    comment: '标签',
  })
  tags: string;

  @Column({
    length: 200,
    comment: '图片集',
  })
  images: string;

  @Column({
    length: 10000,
    comment: '描述',
  })
  content: string;

  @Column({
    default: 0,
    comment: '浏览量',
  })
  viewCount: number;

  @CreateDateColumn({
    comment: '创建时间',
  })
  createTime: Date;

  @UpdateDateColumn({
    comment: '更新时间',
  })
  updateTime: Date;
}
