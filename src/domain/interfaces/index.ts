import { Announcement } from '@domain/announcements';

export interface IAnnouncementGateway { 
  createAnnouncement(
    announcement: Announcement
  ): Promise<Announcement>;

  getAllAnnouncements(): Promise<Announcement[]>;
}