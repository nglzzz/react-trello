export const board = {
  id: 'board-1',
  name: 'Trello Board',
  teamName: 'Private Team',
  closed: false,
  dateLastActivity: '2020-04-22T21:30:49.236Z',
  description: 'test',
  subscribed: false,
  editable: true,
  lists: [
    {
      id: 'list-id-1',
      name: 'INFO',
      closed: false, // maybe need to delete
      subscribed: false,
      position: 1,
    },
    {
      id: 'list-id-2',
      name: 'ToDo',
      closed: false, // maybe need to delete
      subscribed: false,
      position: 2,
    },
    {
      id: 'list-id-3',
      name: 'Development',
      closed: false, // maybe need to delete
      subscribed: false,
      position: 3,
    },
    {
      id: 'list-id-4',
      name: 'Finished',
      closed: false, // maybe need to delete
      subscribed: false,
      position: 4,
    },
  ],
  cards: [
    {
      id: 'card-1',
      name: 'Test',
      closed: false,
      listId: 'list-id-1',
      dateLastActivity: '2020-04-22T21:30:49.236Z',
      description: 'Description card',
      dueDate: "2020-03-16T00:17:00.000Z",
      dueComplete: false,
      position: 1,
      subscribed: false,
      attachments: [],
      labels: [
        {
          color: 'green',
        },
      ],
      members: [
        'member-id-1',
        'member-id-2',
      ],
      cover: {
        coverId: 'cover-id-1',
        coverUrl: '',
      },
    },
  ],
  members: [
    {
      id: 'member-1',
      fullName: 'Full Name',
      avatarUrl: 'http://lorempixel.com/30/30/',
      bio: '',
      initials: 'FN',
      username: 'member1',
    },
    {
      id: 'member-2',
      fullName: 'Full Name',
      avatarUrl: '',
      bio: '',
      initials: 'FN',
      username: 'member2',
    },
  ],
  labels: {
    black: '',
    blue: '',
    green: '',
    lime: '',
    orange: '',
    pink: '',
    purple: '',
    red: '',
    sky: '',
    yellow: '',
  },
};
