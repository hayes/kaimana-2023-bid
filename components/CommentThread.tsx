import { gql } from '@apollo/client';
import { useState } from 'react';
import {
  useAddCommentMutation,
  useAddImageCommentMutation,
  useCommentThreadQuery,
} from '../graphql/__generated__/operations.generated';
import { useTimeSince } from '../lib/useTimeSince';
import { ImageUpload } from './ImageUpload';
import { Polaroid } from './Polaroid';

gql`
  query commentThread($id: ID!) {
    commentThread(id: $id) {
      id
      comments {
        id
        createdAt
        name
        comment
        type
        url
      }
    }
  }
`;

gql`
  mutation addComment($threadId: ID!, $name: String!, $comment: String!) {
    addComment(threadId: $threadId, comment: { name: $name, comment: $comment }) {
      id
      comments {
        id
        name
        comment
        createdAt
        url
      }
    }
  }
`;

gql`
  mutation addImageComment($threadId: ID!, $name: String!, $comment: String!, $url: String!) {
    addComment(
      threadId: $threadId
      comment: { name: $name, comment: $comment, url: $url, type: "image" }
    ) {
      id
      comments {
        id
        name
        comment
        createdAt
        url
      }
    }
  }
`;

export default function CommentThread(props: { id: string }) {
  const { data, loading, error, refetch } = useCommentThreadQuery({
    variables: {
      id: props.id,
    },
  });

  const [name, setName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [addComment] = useAddCommentMutation({
    onCompleted: () => {
      setNewComment('');
      refetch();
    },
  });
  const [addImageComment, addImageCommentResult] = useAddImageCommentMutation({
    onCompleted: () => {
      refetch();
    },
  });

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const thread = data!.commentThread;

  return (
    <div className="mb-16">
      <h2 className="text-2xl bold my-4">Share what Kaimana means to you!</h2>
      <div>
        <label htmlFor="name" className="block text-md">
          Who are you?
        </label>
        <div className="mt-1">
          <input
            onChange={(ev) => setName(ev.target.value)}
            value={name}
            name="name"
            className="block border-1 rounded-sm sm:text-sm w-full sm:w-1/2 sm:min-w-64 bg-opacity-50 bg-black my-4 focus:border-none ring-0 outline-none p-2"
            placeholder="Your name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="name" className="block text-md">
          Share a memory or a note about what Kaimana means to you
        </label>
        <div className="mt-1">
          <textarea
            onChange={(ev) => setNewComment(ev.target.value)}
            value={newComment}
            name="comment"
            className="block border-1 rounded-sm sm:text-sm w-full sm:w-1/2 sm:min-w-64 bg-opacity-50 bg-black my-4 focus:border-none ring-0 outline-none p-2"
            placeholder="Comment"
          />
        </div>
      </div>

      {addImageCommentResult.loading ? (
        'Adding comment...'
      ) : (
        <ImageUpload
          disabled={!name}
          onComplete={(url) => {
            addImageComment({
              variables: {
                comment: newComment,
                threadId: props.id,
                url,
                name,
              },
            });
          }}
        />
      )}

      <button
        type="button"
        className="my-4 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-300 disabled:cursor-default"
        disabled={!newComment || !name}
        onClick={() => {
          addComment({
            variables: {
              threadId: props.id,
              name,
              comment: newComment,
            },
          });
        }}
      >
        Add comment
      </button>

      <ol className="my-8">
        {thread.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ol>
    </div>
  );
}

function Comment({
  comment,
}: {
  comment: { createdAt: string; name: string; comment: string; type: string; url?: string | null };
}) {
  return (
    <li>
      <div className="relative pt-8 my-8">
        <span className="absolute top-0 left-0 italic block text-sm">
          <span className="font-bold">{comment.name}</span> says:
        </span>

        {comment.type === 'image' && comment.url ? (
          <Polaroid src={comment.url} caption={comment.comment} full></Polaroid>
        ) : (
          <span className="block px-16 italic text-lg font-sans">{comment.comment}</span>
        )}
      </div>
    </li>
  );
}
