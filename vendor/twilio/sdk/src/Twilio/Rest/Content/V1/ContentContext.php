<?php

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 * | (_)\/(_)(_|\/| |(/_  v1.0.0
 * /       /
 */

namespace Twilio\Rest\Content\V1;

use Twilio\Exceptions\TwilioException;
use Twilio\InstanceContext;
use Twilio\Values;
use Twilio\Version;

/**
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 */
class ContentContext extends InstanceContext {
    /**
     * Initialize the ContentContext
     *
     * @param Version $version Version that contains the resource
     * @param string $sid The unique string that identifies the resource
     */
    public function __construct(Version $version, $sid) {
        parent::__construct($version);

        // Path Solution
        $this->solution = ['sid' => $sid, ];

        $this->uri = '/Content/' . \rawurlencode($sid) . '';
    }

    /**
     * Fetch the ContentInstance
     *
     * @return ContentInstance Fetched ContentInstance
     * @throws TwilioException When an HTTP error occurs.
     */
    public function fetch(): ContentInstance {
        $payload = $this->version->fetch('GET', $this->uri);

        return new ContentInstance($this->version, $payload, $this->solution['sid']);
    }

    /**
     * Delete the ContentInstance
     *
     * @return bool True if delete succeeds, false otherwise
     * @throws TwilioException When an HTTP error occurs.
     */
    public function delete(): bool {
        return $this->version->delete('DELETE', $this->uri);
    }

    /**
     * Provide a friendly representation
     *
     * @return string Machine friendly representation
     */
    public function __toString(): string {
        $context = [];
        foreach ($this->solution as $key => $value) {
            $context[] = "$key=$value";
        }
        return '[Twilio.Content.V1.ContentContext ' . \implode(' ', $context) . ']';
    }
}